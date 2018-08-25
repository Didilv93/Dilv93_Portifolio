import React from 'react';
import styled from 'styled-components';

import theme from '../../../styles/theme';

const colors = theme.colors;

const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  width: 60px;
  height: 80px;
  :hover {
    .hoverBar {
      opacity: 1;
    }
  }
  @keyframes iconFloat {
    0%   {transform: translateY(0px)}
    50%   {transform: translateY(10px)}
    100% {transform: translateY(0px)}
  }
`;

const SpanStyle = styled.div`
  margin-bottom: 12px;
  margin-left: -10px;
  animation: iconFloat 4s ease-in-out infinite;
  span {
  color: ${colors.secondary};
  }
`;

const Arrow = styled.div`
  animation: iconFloat 4s ease-in-out infinite .4s;
  .hoverBar {
    background-color: ${colors.secondary};
    opacity: 0;
    transition: opacity 1s;
  }
  .fixedBar{
  background-color: ${colors.white};
  }
`;


const ArrowLeft = styled.div`
  width: 30px;
  height: 4px;
  transform: translate(-5.84835px, 0px) rotate(45deg);
`;
const ArrowRight = styled.div`
  width: 30px;
  height: 4px;
  transform: translate(13.54505px, -3px) rotate(-45deg);
`;

export const Component = (props) => {
  return (
    <ButtonStyle onClick={props.action}>
      <SpanStyle><span>Scroll</span></SpanStyle>
      <Arrow>
        <ArrowLeft className='hoverBar'/>
        <ArrowRight className='hoverBar'/>
        <ArrowLeft className='fixedBar'/>
        <ArrowRight className='fixedBar'/>
        <ArrowLeft className='hoverBar'/>
        <ArrowRight className='hoverBar'/>
      </Arrow>
    </ButtonStyle>
  );
};

export default Component;