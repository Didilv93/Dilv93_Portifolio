import { Component } from 'react';
import {CanvasSpace, Line, Pt, Group} from 'pts';


import theme from '../../styles/theme';

const colors = theme.colors;
const galaxyStyle = theme.heroGalaxy;


export class App extends Component {

  createApp() {

    var space = new CanvasSpace('#' + this.props.ID).setup({bgcolor: colors.primary, resize: true, retina: true});
    var form = space.getForm();

    //// Demo code ---

    var pairs = [];

    space.add({

      start:() => {
        let r = space.size.minValue().value;

        // create 200 lines
        for (let i=0; i<200; i++) {
          let ln = new Group( Pt.make(2, r, true), space.pointer );
          ln.moveBy( space.center ).rotate2D( i*Math.PI/100, space.center );
          pairs.push(ln );
        }
      },
      animate: (time, ftime) => {

        for (let i=0, len=pairs.length; i<len; i++) {

          // rotate each line by 0.1 degree and check collinearity with pointer
          let ln = pairs[i];
          ln.rotate2D( 0.0005, space.center );
          let collinear = Line.collinear( ln[0], ln[1], space.pointer, 10);

          if (collinear) {
            form.stroke(galaxyStyle.brightWhite).line(ln);

          } else {
            // if not collinear, color the line based on whether the pointer is on left or right side
            let side = Line.sideOfPt2D( ln, space.center );
            form.stroke( (side>0) ? galaxyStyle.brightWhite : galaxyStyle.brightBlue ).line( ln );
          }
          form.fillOnly(galaxyStyle.brightStars).points( ln, 0.5);
        }
      }
    });
    //// ----
    space.bindMouse().bindTouch().play();
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