import React from 'react';
import styled from 'styled-components';


const ButtonContent = styled.div`
  @keyframes iconFloat {
    0%   {transform: translateY(0px)}
    50%   {transform: translateY(10px)}
    100% {transform: translateY(0px)}
  }
`;
const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
  width: 50px;
  height: 80px;
  :hover {
    .hoverBar {
      opacity: 1;
    }
  }
`;

const SpanStyle = styled.div`
  margin-bottom: 12px;
  margin-left: -3px;
  animation: iconFloat 4s ease-in-out infinite;
  span {
    color: rgb(0,102,204);
  }
`;

const Arrow = styled.div`
  animation: iconFloat 4s ease-in-out infinite;
  .hoverBar {
    background-color: rgb(0,102,204);
    opacity: 0;
    transition: opacity 1s;
  }
  .fixedBar{
    background-color: rgb(255,255,255);
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

export class App extends React.Component {
  render(){
    return (
      <ButtonContent>
        <ButtonStyle>
          <SpanStyle><span>scroll</span></SpanStyle>
          <Arrow>
            <ArrowLeft className='hoverBar'/>
            <ArrowRight className='hoverBar'/>
            <ArrowLeft className='fixedBar'/>
            <ArrowRight className='fixedBar'/>
            <ArrowLeft className='hoverBar'/>
            <ArrowRight className='hoverBar'/>
          </Arrow>
        </ButtonStyle>
      </ButtonContent>
    );
  };
};

export default App;