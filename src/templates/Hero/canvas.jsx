import { Component } from 'react';
import {CanvasSpace, Create, Line} from 'pts';


import theme from '../../styles/theme';

const colors = theme.colors;
let space;

export class App extends Component {

  createApp() {

    space = new CanvasSpace('#' + this.props.ID);
    space.setup({ bgcolor: colors.primary, retina: true, resize: true });

    const layerNumber = 100;
    let form = space.getForm();
    let pts = [layerNumber];
    let ptCenter = undefined;
    let count = window.innerWidth * 0.01/layerNumber;
    let i;

    if (count < 100/layerNumber) count = 100/layerNumber;

    for (i = 0; i < layerNumber; i++) pts[i] = undefined;

    space.add( () => {

      let center = space.center;
      // would be better to init this in player's `start` function, but we are lazy here.
      for (i = 0; i < layerNumber; i++) if (!pts[i])
        pts[i] = Create.distributeRandom( space.innerBound, count );

      if (!ptCenter) ptCenter = Create.distributeLinear( space.innerBound, 1 );

      let perpends = [];
      for(i = 1; i < layerNumber; i++) {
        perpends[i] = pts[i].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      }

      for (i = 0; i < layerNumber; i++) {
        form.strokeOnly("rgba(255, 255, 255, 1)", 0.1).lines( perpends[i] );
      }

      for (i = 0; i < layerNumber; i++){
        form.fillOnly("#fff").points( pts[i], 0.5, "circle" );
      }

      for (i = 0; i < layerNumber; i++) pts[i].rotate2D( 8*(i + 1)/1000000,center);

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