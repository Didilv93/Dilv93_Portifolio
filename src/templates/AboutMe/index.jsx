import React from 'react';
import styled, { css } from 'styled-components';

import theme from '../../styles/theme';
// import Image from '../../images/profile/IMG.png';
// import TimeLine from './teste';

const colors = theme.colors;

const StyledAboutSection = styled.section`
  background-color: ${colors.white};
  ${(props) => {
  const { minHeight } = props;
    return css`
      margin-top: 0;
      flex-direction: column;
      min-height: ${minHeight};
    `;
  }}
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @keyframes widthExpansion {
      0% {
        width: 0px;
      }
      100% {
        width: 222.5px;
      }
    }
    .margin {
      z-index: 0;
      background-color: #362e5c;
      width: 222.5px;
      height: 20px;
      margin: auto;
      margin-top: -15px;
      animation-name: widthExpansion;
      animation-duration: 1.5s;
      animation-timing-function: ease;
    }
`;

const Title = styled.div`
  background-color: ${colors.white};
  max-height: 60px;
  margin: auto;
  margin-top: 1rem;
  z-index: 1;
  h1 {
    font-size: 40px;
    padding: 0px;
    margin: 5px;
  }
`;

const Profile = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  img {
    max-width: 400px;
    max-height: 400px;
    margin: 0px;
  }
  span {
    color: #362e5c;
    margin: auto;
  }
`;

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
        {/* <TimeLine /> */}
        <Content>
          <Title>
            {/* <h1>Sobre mim</h1> */}
          </Title>
          {/* <div className='margin' /> */}
          <Profile>
            {/* <img src={Image} alt='Foto'/> */}
            <span>site em construção...</span>
          </Profile>
        </Content>
      </StyledAboutSection>
    );
  }
}

export default AboutSection;