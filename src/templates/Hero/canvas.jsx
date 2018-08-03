import { Component } from 'react';
import {CanvasSpace, Create, Line} from 'pts';


import theme from '../../styles/theme';

const colors = theme.colors;
let space;

export class App extends Component {

  createApp() {

    space = new CanvasSpace('#' + this.props.ID);
    space.setup({ bgcolor: colors.primary, retina: true, resize: true });

    let form = space.getForm();
    let pts = undefined;
    let ptCenter = undefined;
    let count = window.innerWidth * 0.1;

    if (count < 100) count = 100;

    this.renderChart = () => {

      // Given the data, distribute bars across the space's size

    }

    space.add( () => {

      let center = space.center;
      // would be better to init this in player's `start` function, but we are lazy here.
      if (!pts) pts = Create.distributeRandom( space.innerBound, count );
      if (!ptCenter) ptCenter = Create.distributeLinear( space.innerBound, 1 );

      let perpends = pts.map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );

      let t = space.pointer;
      pts.sort( (a,b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq() );

      form.strokeOnly("#fff", 0.1).lines( perpends );
      form.fillOnly("#fff", count);
      form.fillOnly("#fff").points( pts, 0.5, "circle" );

      pts.rotate2D( 0.0005, center);

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