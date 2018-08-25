import React from 'react';
import Scroll from 'react-scroll';

import Button from '../../../utils/UI/Buttons/HeroScroll';

let scroll = Scroll.animateScroll;

class ScrollPage extends React.Component {

  scrollTo() {
    scroll.scrollTo(window.innerHeight);
  }
  render() {
    return (<Button action={this.scrollTo}/>);
  }
}

export default ScrollPage;