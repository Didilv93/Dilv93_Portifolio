import { Component } from 'react';
import {CanvasSpace, Create, Line} from 'pts';


import theme from '../../styles/theme';

const colors = theme.colors;
let space;

export class App extends Component {

  createApp() {

    space = new CanvasSpace('#' + this.props.ID);
    space.setup({ bgcolor: colors.primary, retina: true, resize: true });

    const layerNumber = 10;
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
      for (i = 0; i < layerNumber; i++) if (!pts[i]) pts[i] = Create.distributeRandom( space.innerBound, count );

      if (!ptCenter) ptCenter = Create.distributeLinear( space.innerBound, 1 );

      let perpends = [];
      perpends[9] = pts[9].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[8] = pts[8].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[7] = pts[7].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[6] = pts[6].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[5] = pts[5].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[4] = pts[4].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[3] = pts[3].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[2] = pts[2].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[1] = pts[1].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );
      perpends[0] = pts[0].map( (p) => [p, Line.perpendicularFromPt( ptCenter, center )] );

      let t = space.pointer;
      for (i = 0; i < layerNumber; i++) pts[i].sort( (a,b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq() );

      for (i = 0; i < layerNumber; i++) form.strokeOnly("#fff", 0.1).lines( perpends[i] );
      form.fillOnly("#fff", count);
      for (i = 0; i < layerNumber; i++) form.fillOnly("#fff").points( pts[i], 0.5, "circle" );

      for (i = 0; i < layerNumber; i++) pts[i].rotate2D( 0.00005* i, center);

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