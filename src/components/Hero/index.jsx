import React from 'react';
import styled, { css } from 'styled-components';

import theme from '../../style/theme';
import StyleContent from './pointAnimation'

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

const renderPoints = (props) => {
  return (
    <StyleContent {...props} />
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
