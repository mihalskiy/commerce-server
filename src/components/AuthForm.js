import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, {css} from 'styled-components';
import { TransitionGroup, Transition } from 'react-transition-group';
import {facebookIcon, googleIcon, userIcon, passwordIcon} from '../utils/Icon';
import Input from "./Input";
import {ProjectHeaderButton} from "./Button";
import {AnimFade} from "../utils/StyleUtils";


const prerender = window.location.port === '45678';
const initDelay = 300;

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: true
        };
        this.toggleAuth = this.toggleAuth.bind(this);
    }

    toggleAuth () {
        const {isLogin} = this.state;
        this.setState({isLogin: !isLogin});
    }

    render() {
        const { formOpen, complete, loading, error } = this.props;
        const { email, isLogin, name, password } = this.state;
        console.log(isLogin)
        return (
            <TransitionGroup component={React.Fragment}>
                {isLogin && formOpen&&
                <Transition appear timeout={0} mountOnEnter unmountOnExit>
                    {status => (
                        <Login status={status}
                               delay={0}>
                            <LoginTitle>Форма входа</LoginTitle>
                            <InputGroup>
                                {userIcon}
                                <UserInput
                                    status={status}
                                    delay={200}
                                    onChange={this.handleInputChange}
                                    autoComplete="name"
                                    id="name"
                                    type="text"
                                    hasValue={!!name}
                                    value={name}
                                    maxLength={320}
                                    required
                                />
                            </InputGroup>
                            <InputGroup>
                                {passwordIcon}
                                <UserInput
                                    status={status}
                                    delay={200}
                                    onChange={this.handleInputChange}
                                    id="password"
                                    type="password"
                                    required
                                />
                            </InputGroup>
                            <ButtonGroup>
                                <AuthDescription onClick={this.toggleAuth}>Зарегистрироваться</AuthDescription>
                                <AuthButton
                                    sending={loading}
                                    loading={loading}
                                    status={status}
                                    delay={400}
                                    icon="send"
                                    type="submit">
                                    {status}
                                </AuthButton>
                            </ButtonGroup>
                            <AuthSocial>
                                <AuthDescription>Войти с помощью соцсетей</AuthDescription>
                                <FacebookIcon>{facebookIcon}</FacebookIcon>
                                <GoogleIcon>{googleIcon}</GoogleIcon>
                            </AuthSocial>
                        </Login>
                    )}
                </Transition>
                }
                {!isLogin && formOpen &&
                <Transition appear timeout={0} mountOnEnter unmountOnExit>
                    {status => (
                        <Login>
                            <LoginTitle>Регистрация</LoginTitle>
                            <InputGroup>
                                {userIcon}
                                <UserInput
                                    status={status}
                                    delay={200}
                                    onChange={this.handleInputChange}
                                    autoComplete="name"
                                    id="name"
                                    type="text"
                                    hasValue={!!name}
                                    value={name}
                                    maxLength={320}
                                    required
                                />
                            </InputGroup>
                            <InputGroup>
                                {passwordIcon}
                                <UserInput
                                    status={status}
                                    delay={200}
                                    onChange={this.handleInputChange}
                                    id="password"
                                    type="password"
                                    required
                                />
                            </InputGroup>
                            <ButtonGroup>
                                <AuthDescription onClick={this.toggleAuth}>Вxoд</AuthDescription>
                                <AuthButton
                                    sending={loading}
                                    loading={loading}
                                    status={'entering'}
                                    delay={400}
                                    icon="send"
                                    type="submit">
                                    Регистрация
                                </AuthButton>
                            </ButtonGroup>
                            <AuthSocial>
                                <AuthDescription>Зарегистрироваться с помощью соцсетей</AuthDescription>
                                <Link to={'https://nurmaget.com/facebook'} className="socialLink">
                                    <FacebookIcon>
                                        {facebookIcon}
                                    </FacebookIcon>
                                </Link>
                                <Link to={'https://nurmaget.com/google'} className="socialLink">
                                    <GoogleIcon>
                                        {googleIcon}
                                    </GoogleIcon>
                                </Link>
                            </AuthSocial>
                        </Login>
                    )}
                </Transition>
                }
            </TransitionGroup>
        )
    }
};

const Login = styled.form`
  top: 120px;
  right: 5px;
  width: 360px;
  z-index: 1025;
  color: rgba(#fff, .85);
  display: inline-block;
  font-size: 16px;
  position: fixed;
  padding: 0 10px;
  text-decoration: none;
  border-radius: 10px;
  @include background-clip(padding-box);
  @include box-shadow(inset -1px 1px 0px rgba(255, 255, 255, 0.3),
  inset 1px 1px 0px rgba(255, 255, 255, 0.3)
  );
  border: 1px solid #000;
  background-color: rgba(#000, .1);
  background: #111111;
  opacity: 0.99;
  @include background-image(linear-gradient(top, rgba(#000, .1), rgba(#000, .3)));
  .extra {

  }

  &:after{
    content: '';
    position: absolute;
    top: -13px;
    right: 22px;
    width: 25px;
    height: 25px;
    //opacity: 0.9;
    background: #111;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: rotate(135deg);
  }
}
`;


const LoginTitle = styled.h2 `
  font-size: 26px;
  width: 100%;
  text-align: center;
  margin: 10px 0;
  text-transform: uppercase;
`

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;

  svg {
    width: 16px;
    height: 16px;
    fill: #ffffff;
    position: absolute;
    top: 25px;
    left: 0;
    z-index: 1025;
  }
`;

const UserInput = styled(Input)`
  position: unset;
  top: 0;
  width: 100%;
  padding-left: 25px;

  input {
    background-color: transparent !important;
    min-height: 35px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const AuthDescription = styled.span `
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const AuthButton = styled(ProjectHeaderButton)`
  height: 40px;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-delay: ${props => props.status === 'entered' ? '0ms' : `${props.delay + initDelay}ms`};
  transition-duration: ${props => props.status === 'entered' ? '0.4s' : '0.8s'};
  transform: translate3d(0, 80px, 0);
  opacity: 1;
  padding-right: 15px;
  padding-left: 15px;
  span {
    font-size: 12px;
  }

  svg {
    width: 16px;
    height: 16px;
  }


  ${props => props.sending && `
    svg {
      transition: transform ${props.curveFastoutSlowin}, opacity 0.3s ease 0.8s;
      transition-duration: 0.8s;
      transform: translate3d(150px, 0, 0);
      opacity: 0;
    }

    div {
      opacity: 0;
    }
  `}

  ${props => props.sending && css`
   div {
      animation: ${AnimFade} 0.5s ease 0.6s forwards;
    }
  `}

  ${props => (props.status === 'entering' ||
    props.status === 'entered') && !prerender && `
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}

  ${props => props.status === 'exiting' && `
    transition-duration: 0.4s;
    transition-delay: 0s;
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  `}
`;


const AuthSocial = styled.div`
  outline: none;
  margin: 0;
  padding: 0;
  list-style: none;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: rgba(#000,.3);
  left: 0;
  border-radius: 0 0 10px 10px;
  @include box-shadow(inset -1px 1px 0px rgba(255, 255, 255, 0.3),
  inset 1px 0 0px rgba(255, 255, 255, 0.3)
  );
  border-top: 1px solid #000;
  word-spacing: -1;

  .socialLink {
    height: 100%;
  }
`;

const FacebookIcon = styled.a`
      top: 0;
      cursor: pointer;
      background-position: left top;
      background-repeat: no-repeat;
      width: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0;
      height: 100%;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAABICAYAAABSr21SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIxNDQ5NDFGMzA5MTFFMjgzNkQ4NUZFNDlBODgxOUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIxNDQ5NDJGMzA5MTFFMjgzNkQ4NUZFNDlBODgxOUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMjE0NDkzRkYzMDkxMUUyODM2RDg1RkU0OUE4ODE5RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMjE0NDk0MEYzMDkxMUUyODM2RDg1RkU0OUE4ODE5RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph5SntoAABiNSURBVHja7FpLr21Z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);
      &:before {
        position: absolute;
        top: 7px;
        left: 12px;
        text-indent: 0;
        color: rgba(#fff, .8);
        text-shadow: 0 -1px 0 rgba(0,0,0,0.3);
        font-size: 30px;
        left: 19px;
      }
      right: 50px;
      svg {
        width: 30px;
        height: 30px;
        fill: #fff;
      }
`;

const GoogleIcon = styled(FacebookIcon)`
  right: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzg2RDM5QzJGMzA5MTFFMjg3MDRFRDBFNTI3REJDMjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzg2RDM5QzNGMzA5MTFFMjg3MDRFRDBFNTI3REJDMjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozODZEMzlDMEYzMDkxMUUyODcwNEVEMEU1MjdEQkMyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozODZEMzlDMUYzMDkxMUUyODcwNEVEMEU1MjdEQkMyMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlitO6cAABNSSURBVHjadFpNjyTH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);
`
export default AuthForm;


