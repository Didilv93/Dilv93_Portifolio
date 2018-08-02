import { Component } from 'react';
// import {CanvasSpace, Create} from '../../utils/pts/pts.d.ts';
import {CanvasSpace, Create} from 'pts';


import theme from '../../styles/theme';

const colors = theme.colors;
let space;

export class App extends Component {

  createApp() {

    space = new CanvasSpace('#' + this.props.ID);
    space.setup({ bgcolor: colors.primary, retina: true, resize: true });

    let form = space.getForm();
    let pts = undefined;

    this.renderChart = () => {

      // Given the data, distribute bars across the space's size

    }

    space.add( (time, ftime) => {

      // would be better to init this in player's `start` function, but we are lazy here.
      if (!pts) pts = Create.distributeRandom( space.innerBound, 100 );

      let t = space.pointer;
      pts.sort( (a,b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq() );

      form.fillOnly("#fff", 10);
      pts.forEach( (p, i) => form.point( p, 5 - 5*i/pts.length, "circle" ) )

      form.fillOnly("#fff").points( pts, 2, "circle" );

      let three = pts.slice(0, 3);
      let threeLines = three.map( (p) => [p, space.pointer] );
      form.strokeOnly("#fff", 2).lines( threeLines );
      form.fillOnly("#fff").points( three, 3, "circle" );
    });

    space.playOnce(Infinity).bindMouse().bindTouch();
    if (window.registerDemo) window.registerDemo(this.props.ID, space);

  }

  // Create chart on mount
  componentDidMount() {
    this.createApp();
  }

  // When data is updated, re-render by playing animate() once
  componentDidUpdate() {

  }

  render() {
    return null;
  }
}

export default App;