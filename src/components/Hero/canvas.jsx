import React, { Component } from 'react';
import {CanvasSpace, Create} from "pts";

import theme from '../../style/theme';

export class App extends Component {

  // createApp() {
    
  //   const canvasID = this.props.ID;
  //   const colors = theme.colors;

  //   var space = new CanvasSpace('#' + canvasID);
  //   space.setup({ bgcolor: colors.primary, retina: true, resize: true });
  
  //   var form = space.getForm();
  //   var pts = undefined;

  //   this.renderChart = () => {

  //     // Given the data, distribute bars across the space's size

  //   }
    
  //   space.add( (time, ftime) => {

  //     // would be better to init this in player's `start` function, but we are lazy here.
  //     if (!pts) pts = Create.distributeRandom( space.innerBound, 100 );

  //     let t = space.pointer;
  //     pts.sort( (a,b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq() );
      
  //     form.fillOnly("#fff", 10);
  //     pts.forEach( (p, i) => form.point( p, 5 - 5*i/pts.length, "circle" ) )

  //     form.fillOnly("#fff").points( pts, 2, "circle" );

  //     let three = pts.slice(0, 3);
  //     let threeLines = three.map( (p) => [p, space.pointer] );
  //     form.strokeOnly("#fff", 2).lines( threeLines );
  //     form.fillOnly("#fff").points( three, 3, "circle" );
  //   });

  //   space.playOnce(Infinity).bindMouse().bindTouch();
  
  // }

  // // Create chart on mount
  // componentDidMount() {
  //   this.createApp();
  // }

  // // When data is updated, re-render by playing animate() once
  // componentDidUpdate() {

  // }
  
  render() {
    // if (window.registerDemo) window.registerDemo(canvasID, space);
    return null;
  }
}

export default App;