import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

import Typography from './HeroTypography';
import Canvas from './canvas';
import TypographyMotion from '../../utils/UI/Movement/Typography/index';
import ScrollPage from '../../utils/UI/Scroll/scroll';

const colors = theme.colors;

const StyledHero = styled.section`
  ${(props) => {
  const { minHeight } = props;
    return css`
      margin-top: 0;
      background-color: ${colors.primary};
      background-image: radial-gradient(rgb(0,0,20), rgba(26, 0, 19, 0.5), rgb(0,0,0), rgb(0,0,2));
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
  constructor(props, context) {
    super(props, context);
    this.state = { minHeight: '100vh', enable: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.updateWindowDimensions);

    TypographyMotion();
    Canvas('ptCanvas');
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      minHeight: `${window.innerHeight}px` || '100vh',
    })
  }

  render() {
    return (
      <StyledHero
        minHeight={this.state.minHeight}
        id='ptCanvas'
        className='background'
      >
        <Typography/>
        <ButtonStyle className='scrollButonHero'>
          <ScrollPage />
        </ButtonStyle>
      </StyledHero>
    );
  }
}