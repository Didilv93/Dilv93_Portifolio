import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

import Typography from './HeroTypography';
import Canvas from './canvas';
import Button from '../../utils/UI/Buttons/HeroScroll';
import TypographyMotion from '../../utils/UI/Movement/Typography/index';

const colors = theme.colors;

const StyledHero = styled.section`
  ${(props) => {
  const { minHeight } = props;
    return css`
      margin-top: 0;
      background-color: ${colors.primary};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: ${minHeight};
    `;
  }}
`;
const ButtonStyle = styled.section`
  position: absolute;
  top: 80vh;
  left: 80vw;
  opacity: 0;
  transition: opacity 4s;
  @media only screen and (max-width:500px){
    top: 70vh;
  }
`;
export class Hero extends React.Component {
  state = { minHeight: '100vh'}
  componentDidMount = () => {
    this.setState({
      minHeight: `${window.innerHeight}px` || '100vh',
    })
    Canvas('ptCanvas');
    TypographyMotion();
  }
  render() {

    return (
      <StyledHero
        minHeight={this.state.minHeight}
        id='ptCanvas'
      >
        <Typography/>
        <ButtonStyle className='scrollButonHero'>
          <Button />
        </ButtonStyle>
      </StyledHero>
    );
  }
}