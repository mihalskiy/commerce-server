import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Monogram from './Monogram';
import {Icon} from '../utils/Icon';
import Theme from '../utils/Theme';
import { Media } from '../utils/StyleUtils';

const HeaderIcons = ({ toggleMenu }) => (
  <HeaderNavIcons>
    <HeaderNavIconLink
      target="_blank"
      rel="noopener noreferrer"
      aria-label="facebook"
      href="https://www.facebook.com/nurmaget/"
    >
      <HeaderNavIcon icon="facebook" />
    </HeaderNavIconLink>
    <HeaderNavIconLink
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Dribbble"
      href="/"
    >
      <HeaderNavIcon icon="dribbble" />
    </HeaderNavIconLink>
    <HeaderNavIconLinkRouter
      aria-label="Contact"
      to="/contact"
      href="/contact"
      onClick={!!toggleMenu ? () => toggleMenu() : null}
    >
      <HeaderNavIcon icon="email" />
    </HeaderNavIconLinkRouter>
  </HeaderNavIcons>
);

const Header = ({ menuOpen, toggleMenu }) => (
  <HeaderWrapper role="banner">
    <Transition
      in={menuOpen}
      timeout={{ enter: 5, exit: 500 }}
      mountOnEnter
      unmountOnExit
    >
      {status => (
        <HeaderMobileNav status={status}>
          <HeaderMobileNavLink
            delay={250}
            status={status}
            onClick={toggleMenu}
            to="/#intro"
          >
            Главная
          </HeaderMobileNavLink>
          <HeaderMobileNavLink
            delay={300}
            status={status}
            onClick={toggleMenu}
            to="/#portfolio"
          >
            Портфолио
          </HeaderMobileNavLink>
        <HeaderMobileNavLink
            delay={250}
            status={status}
            onClick={toggleMenu}
            to="/#price"
        >
            Цены
        </HeaderMobileNavLink>
        <HeaderMobileNavLink
            delay={250}
            status={status}
            onClick={toggleMenu}
            to="/#news"
        >
            Блог
        </HeaderMobileNavLink>
          <HeaderMobileNavLink
            delay={350}
            status={status}
            onClick={toggleMenu}
            to="/#details"
          >Контакты</HeaderMobileNavLink>
          <HeaderIcons toggleMenu={toggleMenu} />
        </HeaderMobileNav>
      )}
    </Transition>
    <HeaderLogo to="/#intro" aria-label="Back to home">
      <Monogram highlight={Theme.colorPrimary(1)} />
    </HeaderLogo>
    <HeaderNav role="navigation">
      <HeaderNavList>
        <HeaderNavLink to="/#portfolio">Портфолио</HeaderNavLink>
        <HeaderNavLink to="/#price">Цены</HeaderNavLink>
        <HeaderNavLink to="/#news">Новости</HeaderNavLink>
        <HeaderNavLink to="/#details">Контакты</HeaderNavLink>
      </HeaderNavList>
      <HeaderIcons />
    </HeaderNav>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  padding: 0;
  width: 45px;
  z-index: 1024;
  top: ${props => props.theme.navIcon.desktop};
  left: ${props => props.theme.navIcon.desktop};
  bottom: ${props => props.theme.navIcon.desktop};

  @media (max-width: ${Media.tablet}) {
    top: ${props => props.theme.navIcon.tablet};
    left: ${props => props.theme.navIcon.tablet};
    bottom: ${props => props.theme.navIcon.tablet};
  }

  @media (max-width: ${Media.mobile}), (max-height: ${Media.mobile}) {
    top: ${props => props.theme.navIcon.mobile};
    left: ${props => props.theme.navIcon.mobile};
    bottom: auto;
  }
`;

const HeaderLogo = styled(Link)`
  display: flex;
  position: relative;

  g rect {
    opacity: 0;
    transform: scale3d(1, 0, 1);
    transform-origin: top;
    z-index: 3000;
    transition:
      transform 0.1s ${props => props.theme.curveFastoutSlowin},
  }

  &:hover g rect,
  &:focus g rect,
  &:active g rect {
    opacity: 1;
    z-index: 3000;
    transform: scale3d(1, 1, 1);
    transform-origin: bottom;
    transition:
      transform 0.1s ${props => props.theme.curveFastoutSlowin},
      opacity 0.3s ease;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
  max-width: 45px;
  position: relative;
  top: -10px;

  @media (max-width: ${Media.mobile}), (max-height: ${Media.mobile}) {
    display: none;
  }
`;

const HeaderNavList = styled.div`
  transform: rotate(-90deg) translate3d(-50%, 0, 0);
  display: flex;
  flex-direction: row-reverse;
`;

const HeaderNavLink = styled(NavLink)`
  padding: 20px;
  display: flex;
  color: ${props => props.theme.colorText(0.8)};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease 0.1s;
  line-height: 1;

  &:hover,
  &:active,
  &:focus,
  &.active {
    color: ${props => props.theme.colorText(1)};
  }

  &:after {
    content: '';
    position: absolute;
    top: 80%;
    right: 10px;
    left: 10px;
    height: 4px;
    background: ${props => props.theme.colorPrimary(1)};
    transform: scaleX(0) translateY(-2px);
    transition: transform 0.4s ${props => props.theme.curveFastoutSlowin};
    transform-origin: right;
  }

  &:hover:after,
  &:active:after,
  &:focus:after,
  &.active:after {
    transform: scaleX(1) translateY(-2px);
    transform-origin: left;
  }
`;

const HeaderNavIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Media.mobile}), (max-height: ${Media.mobile}) {
    flex-direction: row;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${Media.mobileLS} {
    left: 20px;
    transform: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderNavIconLink = styled.a`
  display: flex;
  padding: 10px;
`;

const HeaderNavIconLinkRouter = HeaderNavIconLink.withComponent(Link);

const HeaderNavIcon = styled(Icon)`
  fill: ${props => props.theme.colorText(0.6)};
  transition: all 0.4s ease;

  ${HeaderNavIconLink}:hover &,
  ${HeaderNavIconLinkRouter}:hover &,
  ${HeaderNavIconLink}:focus &,
  ${HeaderNavIconLinkRouter}:focus &,
  ${HeaderNavIconLink}:active &,
  ${HeaderNavIconLinkRouter}:active & {
    fill: ${props => props.theme.colorPrimary(1)};
  }
`;

const HeaderMobileNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.colorBackground(0.9)};
  transform: translate3d(0, -100%, 0);
  transition: transform 0.5s ${props => props.theme.curveFastoutSlowin};
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => props.status === 'entered' && `
    transform: translate3d(0, 0, 0);
  `}

  @media (max-width: ${Media.mobile}), (max-height: ${Media.mobile}) {
    display: flex;
  }
`;

const HeaderMobileNavLink = styled(NavLink).attrs({
  active: 'active',
})`
  width: 100%;
  font-size: 22px;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colorText(1)};
  padding: 20px;
  transform: translate3d(0, -30px, 0);
  opacity: 0;
  transition: all 0.3s ${props => props.theme.curveFastoutSlowin};
  transition-delay: ${props => props.delay}ms;
  position: relative;
  top: -15px;

  @media ${Media.mobileLS} {
    top: auto;
  }

  ${props => props.status === 'entered' && `
    opacity: 1;
    transform: translate3d(0, 0, 0);
  `}

  &:after {
    content: '';
    position: absolute;
    top: 80%;
    right: 60px;
    left: 60px;
    height: 4px;
    background: ${props => props.theme.colorPrimary(1)};
    transform: scaleX(0) translateY(-1px);
    transition: transform 0.4s ${props => props.theme.curveFastoutSlowin};
    transform-origin: right;
  }

  &:hover:after,
  &:active:after,
  &:focus:after {
    transform: scaleX(1) translateY(-1px);
    transform-origin: left;
  }
`;

export default Header;
