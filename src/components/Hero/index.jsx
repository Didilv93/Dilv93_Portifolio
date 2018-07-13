import React from 'react';
import styled, { css } from 'styled-components';

import theme from '../../style/theme';

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

const StyleContent = styled.div`
  height: .15rem;
  width: 100%;
  position: absolute;
  ${(props) => {
    const { order } = props;
    return css`
      transform: rotate(-60deg);
    `;
  }}
`;

const StylePoint = styled.div`
  width: .20rem;
  height: .20rem;
  border-radius: 10rem;

  ${(props) => {
    const { order } = props;
    return css`
      background-color: ${props.color};
      transform: ${props.translate};
    `;
  }}
`;

const LightBeam = styled.div`
  width: 100%;
  height: .1rem;
  opacity: .2;

  ${(props) => {
    const { order } = props;
    return css`
      background-color: ${colors.white};
      transform: ${props.translateLight};
    `;
  }}
`;

const renderPoints = (props) => {
  return (
    <StyleContent {...props} >
      <StylePoint {...props} />
      <LightBeam {...props} />
    </StyleContent>
  );
};

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
      <StyledHero minHeight={this.state.minHeight}>
        {allPoints ? allPoints.map(pointDate => renderPoints(pointDate)) : ""}
      </StyledHero>
    );
  }
};

export default Hero;
