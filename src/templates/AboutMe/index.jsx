import React from 'react';
import styled, { css } from 'styled-components';

import theme from '../../styles/theme';
// import Image from '../../images/profile/IMG.png';

const colors = theme.colors;

const StyledAboutSection = styled.section`
  background-color: rgb(2,5,26);
  ${(props) => {
  const { minHeight } = props;
    return css`
      margin-top: 0;
      display: flex;
      flex-direction: column;
      min-height: ${minHeight};
    `;
  }}
`;

const Content = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  p {
    position: absolute;
    text-align: center;
    font-size: 35px;
    color: ${colors.secondary};
  }
`;

const StyledText = styled.div`
  width: 600px;
  height: 200px;
  p {
    max-width: 50ch;
    color: ${colors.white};
  }
`;

// const ImageStyle = styled.div`
//   max-width: 800px;
//   margin-left: auto;
// `;

export class AboutSection extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.scrollOpen = this.scrollOpen.bind(this);
    this.scrollClose = this.scrollClose.bind(this);
    this.state = { minHeight: '100vh', enable: false}
  }
  componentDidMount = () => {
    this.setState({
      minHeight: `${window.innerHeight}px` || '100vh',
    })
  }

  scrollOpen(){
    this.setState({ enable: true });
  }

  scrollClose(){
    this.setState({ enable: false });
  }

  render() {
    return (
      <StyledAboutSection
        minHeight={this.state.minHeight}
      >
        <StyledTitle>
          <p></p>
        </StyledTitle>
        <Content>
          <StyledText>
            <p></p>
          </StyledText>
        </Content>
      </StyledAboutSection>
    );
  }
}

export default AboutSection;