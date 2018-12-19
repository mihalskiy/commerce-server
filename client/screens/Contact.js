import React, { PureComponent } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {connect} from "react-redux";
import styled, { css } from 'styled-components';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import Input from '../components/Input';
import DecoderText from '../components/DecoderText';
import { RouterButton, ProjectHeaderButton } from '../components/Button';
import { Media, AnimFade } from '../utils/StyleUtils';
import ScrollToTop from '../utils/ScrollToTop';
import {getOrder, fetchSuccessAction } from '../redux/order/order.action';
import {bindActionCreators} from "redux";


const prerender = window.location.port === '45678';
const initDelay = 300;

const mapDispatchToProps = dispatch => bindActionCreators({
    getOrder,
    fetchSuccessAction

}, dispatch);

class Contact extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            name: '',
            phone: '',
            sending: false,
            complete: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleClick (event) {
        this.props.getOrder({
            email: this.state.email,
            message: this.state.message,
            name: this.state.name,
            phone: this.state.phone
        });
        event.preventDefault();
        this.props.fetchSuccessAction()

    }

    render() {
        const { status,complete } = this.props;
        const { email, phone, name, message, sending } = this.state;

        console.log('this.complete', complete)

        return (
            <ContactWrapper>
                <ScrollToTop status={status} />
                <Helmet>
                    <title>Contact me</title>
                    <meta
                        name="description"
                        content="Send me a message if you're interested in discussing a project or if you just want to say hi"
                    />
                </Helmet>
                <TransitionGroup component={React.Fragment}>
                    {!complete &&
                    <Transition appear timeout={1600} mountOnEnter unmountOnExit>
                        {status => (
                            <ContactForm onSubmit={this.handleClick} role="form">
                                <ContactTitle status={status} delay={50}>
                                    <DecoderText
                                        text="Say hello"
                                        start={status === 'entering' && !prerender}
                                        offset={140}
                                    />
                                </ContactTitle>
                                <ContactDivider status={status} delay={100}/>
                                <ContactInput
                                    status={status}
                                    delay={200}
                                    onChange={this.handleInputChange}
                                    autoComplete="name"
                                    label="Имя"
                                    id="name"
                                    type="text"
                                    hasValue={!!name}
                                    value={name}
                                    maxLength={320}
                                    required
                                />
                                <ContactInput
                                    status={status}
                                    delay={200}
                                    onChange={this.handleInputChange}
                                    autoComplete="number"
                                    label="телефон"
                                    id="phone"
                                    type="number"
                                    hasValue={!!phone}
                                    value={phone}
                                    maxLength={320}
                                    required
                                />
                                <ContactInput
                                    status={status}
                                    delay={200}
                                    onChange={this.handleInputChange}
                                    autoComplete="email"
                                    label="Email"
                                    id="email"
                                    type="email"
                                    hasValue={!!email}
                                    value={email}
                                    maxLength={320}
                                    required
                                />
                                <ContactInput
                                    status={status}
                                    delay={300}
                                    onChange={this.handleInputChange}
                                    autoComplete="off"
                                    label="Сooбщение"
                                    id="message"
                                    hasValue={!!message}
                                    value={message}
                                    maxLength={2000}
                                    required
                                    multiline
                                />
                                <ContactButton
                                    sending={sending}
                                    loading={sending}
                                    status={status}
                                    delay={400}
                                    icon="send"
                                    type="submit"
                                >
                                    Send Message
                                </ContactButton>
                            </ContactForm>
                        )}
                    </Transition>
                    }
          {complete &&
            <Transition appear timeout={0} mountOnEnter unmountOnExit>
              {status => (
                <ContactComplete>
                  <ContactCompleteTitle
                    status={status}
                    delay={0}
                  >
                    Спасибо {name}! Ваш заказ отправлен
                  </ContactCompleteTitle>
                  <ContactCompleteText status={status} delay={200}>
                      Ваш будущий сайт слишком хорош, чтобы принадлежать кому-то другому
                  </ContactCompleteText>
                  <ContactCompleteButton
                    secondary
                    to="/"
                    href="/"
                    status={status}
                    delay={400}
                    icon="chevronRight"
                  >
                    Вернуться на главную страницу
                  </ContactCompleteButton>
                </ContactComplete>
              )}
            </Transition>
          }
                </TransitionGroup>
            </ContactWrapper>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        complete: state.order.data,
    }
};

Contact = connect(mapStateToProps, mapDispatchToProps)(Contact);
export default Contact;


const ContactWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding-left: 80px;

  @media (max-width: ${Media.tablet}) {
    padding-left: 60px;
  }

  @media (max-width: ${Media.mobile}) {
    padding-left: 0;
  }

  @media (max-width: ${Media.mobile}), (max-height: ${Media.mobile}) {
    padding-left: 0;
  }
`;

const ContactForm = styled.form`
  max-width: 440px;
  width: 100%;
  padding: 40px 20px;
  
  input:-webkit-autofill {
    background-color: transparent !important;
  }

  @media (max-width: ${Media.mobile}) {
    padding: 120px 20px 40px;
    align-self: flex-start;
  }
`;

const ContactTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 40px;
  line-height: 1;
  margin-top: 0;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-duration: 0.8s;
  transition-delay: ${props => props.delay + initDelay}ms;
  transform: translate3d(0, 90px, 0);
  opacity: 0;
  height: 32px;

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

const ContactDivider = styled.div`
  margin-bottom: 70px;
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colorPrimary(1)};
  position: relative;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-duration: 0.8s;
  transition-delay: ${props => props.delay + initDelay}ms;
  transform: translate3d(0, 90px, 0);
  opacity: 0;

  &:before {
    content: '';
    height: 10px;
    width: 90px;
    background: ${props => props.theme.colorPrimary(1)};
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 10px),
      calc(100% - 10px) 100%,
      10px 100%,
      0 0
    );
  }

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

const ContactInput = styled(Input)`
  margin-bottom: 40px;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-duration: 0.8s;
  transition-delay: ${props => props.delay + initDelay}ms;
  transform: translate3d(0, 80px, 0);
  opacity: 0;

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

const ContactButton = styled(ProjectHeaderButton)`
  margin-top: 20px;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-delay: ${props => props.status === 'entered' ? '0ms' : `${props.delay + initDelay}ms`};
  transition-duration: ${props => props.status === 'entered' ? '0.4s' : '0.8s'};
  transform: translate3d(0, 80px, 0);
  opacity: 0;

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

const ContactComplete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ContactCompleteTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  margin: 0;
  text-align: center;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-duration: 0.8s;
  transition-delay: ${props => props.delay}ms;
  transform: translate3d(0, 80px, 0);
  opacity: 0;

  ${props => props.status === 'entered' && `
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}
`;

const ContactCompleteText = styled.p`
  font-size: 18px;
  text-align: center;
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-duration: 0.8s;
  transition-delay: ${props => props.delay}ms;
  transform: translate3d(0, 80px, 0);
  opacity: 0;

  ${props => props.status === 'entered' && `
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}
`;

const ContactCompleteButton = styled(RouterButton)`
  transition-property: transform, opacity;
  transition-timing-function: ${props => props.theme.curveFastoutSlowin};
  transition-duration: 0.8s;
  transition-delay: ${props => props.delay}ms;
  transform: translate3d(0, 80px, 0);
  opacity: 0;
  padding-left: 3px;

  ${props => props.status === 'entered' && `
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}
`;
