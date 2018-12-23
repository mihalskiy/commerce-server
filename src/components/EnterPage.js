import React from 'react';
import styled from 'styled-components';
import {Icon} from '../utils/Icon';

const EnterPage = ({ onClick, formOpen }) => (
    <UserButton aria-label="Menu" onClick={onClick}>
        <UserItem>
            <UserIcon open={formOpen} icon="user" size={32} color="white" />
            <UserIcon open={formOpen} icon="close" size={32} color="white" />
        </UserItem>
    </UserButton>
);

const UserButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  position: fixed;
  top: ${props => props.theme.userSelect.mobile};
  right: ${props => props.theme.userSelect.right};
  margin: 0;
  display: block;
  width: 48px;
  height: 48px;
  transition: all 0.4s ease;
  z-index: 1024;
  clip-path: ${props => props.theme.clipPath(8)};

  &:hover,
  &:focus,
  &:active {
    background: ${props => props.theme.colorBlack(0.2)};
    outline: none;
  }
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const UserIcon = styled(Icon)`
  position: absolute;
  transition: all 0.4s ${props => props.theme.curveFastoutSlowin};
  transition-delay: 0.1s;
  opacity: 1;
  transform: rotate(0deg);

  ${props => props.icon === 'close' && `
    transition-delay: 0s;
    transform: rotate(-45deg);
    opacity: 0;
  `}

  ${props => props.open && props.icon === 'close' && `
    transition-delay: 0.1s;
    transform: rotate(0deg);
    opacity: 1;
  `}

  ${props => props.open && props.icon === 'user' && `
    transition-delay: 0s;
    transform: rotate(45deg);
    opacity: 0;
  `}
`;

export default EnterPage;
