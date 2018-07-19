import React from 'react';
import styled, { css } from 'styled-components';

import CanvasAniamtion from './canvas';

const StyledHero = styled.section`
  ${(props) => {
  const { minHeight } = props;
    return css`
      margin-top: 0;
      background-color: #A9A9A9;
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
  }
  render() {
    const props = this.props
    const allPoints = props.allPoints;
    return (
      <StyledHero 
        minHeight={this.state.minHeight}
        id="ptCanvas"
      >
        <CanvasAniamtion ID="ptCanvas"/>
      </StyledHero>
    );
  }
};

export default Hero;
