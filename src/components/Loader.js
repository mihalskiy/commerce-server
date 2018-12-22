import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Loader = ({ size, color, style, className }) => (
  <LoaderContainer size={size} style={style} className={className}>
    <LoaderSpan color={color} />
    <LoaderSpan color={color} />
    <LoaderSpan color={color} />
    <LoaderSpan color={color} />
  </LoaderContainer>
);

const LoaderContainer = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
    &:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
  }
`;

const AnimGrow = keyframes`
  0%, 100% {
    transform: scaleY(0.4);
    opacity: 0.6;
  }

  50% {
    transform: scaleY(0.8);
    opacity: 1;
  }
`;

const LoaderSpan = styled.span`
  display: block;
  width: 4px;
  margin-left: 2px;
  height: 100%;
  background-color: ${props => props.color};

  &:nth-child(1) {
    animation: ${css`${AnimGrow} 1s ease-in-out infinite`};
    margin-left: 0;
  }

  &:nth-child(2) {
    animation: ${css`${AnimGrow} 1s ease-in-out 0.15s infinite`};
  }

  &:nth-child(3) {
    animation: ${css`${AnimGrow} 1s ease-in-out 0.30s infinite`};
  }

  &:nth-child(4) {
    animation: ${css`${AnimGrow} 1s ease-in-out 0.45s infinite`};
  }
`;

export default Loader;
