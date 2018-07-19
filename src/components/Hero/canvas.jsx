import React, { Component } from 'react';
import {CanvasSpace, Num, Rectangle, Triangle} from "pts" 

import theme from '../../style/theme';

export class App extends Component {

  createApp() {
    
    const canvasID = this.props.ID;
    const colors = theme.colors;

    var space = new CanvasSpace('#' + canvasID);
    space.setup({ bgcolor: colors.primary });
  
    var form = space.getForm();

    this.renderChart = () => {

      // Given the data, distribute bars across the space's size

    }
    
    space.add( (time, ftime) => {
      // rectangle
      var rect = Rectangle.fromCenter( space.center, space.size.$divide(2) );
      var poly = Rectangle.corners( rect );
      poly.shear2D( Num.cycle( time%5000/5000 ) - 0.5, space.center );
      
      // triangle
      var tris = poly.segments( 2, 1, true );
      tris.map( (t) => t.push( space.pointer ) );
      
      // circle
      var circles = tris.map( (t) => Triangle.incircle( t ) );
      
      // drawing
      form.fillOnly("#123").polygon( poly );
      form.fill("#f03").circles( circles );
      form.strokeOnly("#fff ", 3 ).polygons( tris );
      form.fill("#123").point( space.pointer, 5 );
    });

    space.playOnce(Infinity).bindMouse().bindTouch();
  
  }

  // Create chart on mount
  componentDidMount() {
    this.createApp();
  }

  // When data is updated, re-render by playing animate() once
  componentDidUpdate() {

  }
  
  render() {
    if (window.registerDemo) window.registerDemo(canvasID, space);
    return null;
  }
}

export default App;