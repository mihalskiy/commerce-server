import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import {Icon} from '../utils/Icon';
import Theme from '../utils/Theme';
import { ColorTint } from '../utils/StyleUtils';

const ButtonContent = ({ iconRight, icon, children, secondary, loading }) => (
  <React.Fragment>
    {icon && <ButtonIcon loading={loading} left icon={icon} secondary={secondary} />}
    <ButtonText loading={loading} secondary={secondary}>{children}</ButtonText>
    {iconRight && <ButtonIcon loading={loading} icon={iconRight} secondary={secondary} />}
    {loading && <ButtonLoader size="24" color={Theme.colorBackground(1)} />}
  </React.Fragment>
);

const ProjectHeaderButton = ({ className, style, ...props }) => (
  <ButtonContainer
    className={className}
    style={style}
    {...props}
  >
    <ButtonContent {...props} />
  </ButtonContainer>
);

const LinkButton = ({ className, style, href, rel, target, ...props }) => (
  <LinkButtonContainer
    className={className}
    style={style}
    href={href}
    rel={rel}
    target={target}
  >
    <ButtonContent {...props} />
  </LinkButtonContainer>
);

const RouterButton = ({ className, style, to, ...props }) => (
  <RouterButtonContainer
    className={className}
    style={style}
    to={to}
    secondary={props.secondary ? 1 : 0}
  >
    <ButtonContent {...props} />
  </RouterButtonContainer>
);

const ButtonLoader = styled(Loader)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonContainer = styled.button`
  background: none;
${props => !props.secondary && `
  background: ${ColorTint(props.theme.colorPrimary(1), 0.2)};
  `}
  height: 56px;
  padding: 0 26px;
  border: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ${props => props.theme.curveFastoutSlowin};
  display: flex;
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.colorBackground(1)};
  text-decoration: none;
  font-family: inherit;
  position: relative;

  ${props => !props.secondary && `
    &:before {
      content: '';
      transition: all 0.4s ${props.theme.curveFastoutSlowin};
      background: ${props.theme.colorPrimary(0.4)};
      clip-path: ${props.theme.clipPath(10)};
      position: absolute;
      top: -5px;
      right: -5px;
      bottom: -5px;
      left: -5px;
      z-index: -1;
      opacity: 0;
    }

    &:after {
      content: '';
      transition: all 0.4s ${props.theme.curveFastoutSlowin};
      background: ${props.theme.colorPrimary(1)};
      clip-path: ${props.theme.clipPath(8)};
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  `}

  ${props => !props.disabled && !props.secondary && `
    &:hover,
    &:focus {
     
    }

    &:hover:after,
    &:focus:after {
      background: ${ColorTint(props.theme.colorPrimary(1), 0.2)};
    }

    &:focus:before {
      opacity: 1;
    }
  `}

  &:active {
    transform: scale(1);
    transition-duration: 0.1s;
  }

  ${props => props.secondary && `
    background: none;
    
    padding: 0 10px;
    position: relative;
    left: -10px;

    &:after {
      content: '';
      height: 30px;
      position: absolute;
      top: 50%;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${props.theme.colorPrimary(0.2)};
      transform: scale3d(0, 1, 1) translateY(-50%);
      transform-origin: right;
      transition: transform 0.4s ${props.theme.curveFastoutSlowin};
    }

    &:hover,
    &:focus,
    &:active {
      outline: none;
      transform: none;
      background: transparent;
    }

    &:hover:after,
    &:focus:after,
    &:active:after {
      transform: scale3d(1, 1, 1) translateY(-50%);
      transform-origin: left;
    }
  `}

  ${props => props.icon && `
    padding-right: 32px;
  `}
`;

const LinkButtonContainer = ButtonContainer.withComponent('a');
const RouterButtonContainer = ButtonContainer.withComponent(Link);

const ButtonText = styled.span`
  font-size: 18px;
  font-weight: 500;
  position: relative;
  line-height: 1.2;

  ${props => props.loading && `
    visibility: hidden;
  `}

  ${props => props.secondary ? `
    color: ${props.theme.colorWhite(1)};
  `: `
    color: ${props.theme.colorBackground(1)};
  `}
`;

const ButtonIcon = styled(Icon)`
  margin-left: ${props => props.left ? '0' : '10px'};
  margin-right: ${props => props.left ? '10px' : '0'};
  transition: all 0.3s ${props => props.theme.curveFastoutSlowin};
  fill: ${props => props.theme.colorBackground(1)};

  ${props => props.secondary && `
    fill: ${props.theme.colorPrimary(1)};
  `}

  ${ButtonContainer}:hover &,
  ${ButtonContainer}:focus &,
  ${LinkButtonContainer}:hover &,
  ${LinkButtonContainer}:focus &,
  ${RouterButtonContainer}:hover &,
  ${RouterButtonContainer}:focus & {
    ${props => props.icon === 'arrowRight' && `
      transform: translate3d(3px, 0, 0);
    `}
  }

  ${props => props.loading && `
    visibility: hidden;
  `}
`;

export { LinkButton, RouterButton, ProjectHeaderButton };
