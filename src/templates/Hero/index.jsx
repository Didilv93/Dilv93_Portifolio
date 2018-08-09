import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

import Typography from './HeroTypography';
import Canvas from './canvas';
import MotionStyle from '../../utils/UI/Movement/Typography/index';

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


export class Hero extends React.Component {
  state = { minHeight: '100vh'}
  componentDidMount = () => {
    this.setState({
      minHeight: `${window.innerHeight}px` || '100vh',
    })
    Canvas('ptCanvas');
    MotionStyle();
  }
  render() {

    return (
      <StyledHero
        minHeight={this.state.minHeight}
        id='ptCanvas'
      >
        <Typography/>
      </StyledHero>
    );
  }
}