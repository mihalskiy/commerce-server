import React from 'react';
import styled from 'styled-components';
import Anchor from './Anchor';
import { Media } from '../utils/StyleUtils';

const Footer = () => (
  <FooterContainer role="contentinfo">
    <FooterDate>{`© ${new Date().getFullYear()}`} Веб студия Nurmaget.</FooterDate>
    <Anchor secondary href="/humans.txt">Создания веб сайтов под ключ под ключ</Anchor>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 70px 30px;
  z-index: 16;
  position: relative;
  font-size: 16px;
  color: ${props => props.theme.colorText(0.6)};

  @media (max-width: ${Media.tablet}) {
    padding: 60px 20px;
  }

  ${Anchor} {
    display: inline-flex;
  }
`;

const FooterDate = styled.span`
  padding-right: 5px;
  display: inline-flex;
`;

export default Footer;
