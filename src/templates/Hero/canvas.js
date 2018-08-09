import {CanvasSpace, Line, Pt, Group} from 'pts';

import theme from '../../styles/theme';

const colors = theme.colors;
const galaxyStyle = {
  brightWhite: 'rgba(255,255,255,',
  brightBlue: 'rgba(0,102,204,',
  brightStars:'rgba(255,255,255,',
}

export function App (ID) {

  function createApp() {

    let space = new CanvasSpace('#' + ID).setup({bgcolor: colors.primary, resize: true, retina: true});
    let form = space.getForm();

    //// Demo code ---

    let pairs = [];
    let cursorNotFound = true;
    let brightness = 0;

    space.add({

      start:() => {
        let r = space.size.minValue().value;

        // create 200 lines
        for (let i=0; i<200; i++) {
          let ln = new Group( Pt.make(2, r, true), new Pt(0,0));
          ln.moveBy( space.center ).rotate2D( i*Math.PI/100, space.center );
          pairs.push(ln );
        }
      },
      animate: (time, ftime) => {
        for (let i=0, len=pairs.length; i<len; i++) {
          // rotate each line by 0.1 degree and check collinearity with pointer
          let ln = pairs[i];
          ln.rotate2D( 5*i/1000000, space.center );
          let collinear = Line.collinear( ln[0], ln[1], space.pointer, 10);
          if (collinear) {
            if(!cursorNotFound) {
              if (brightness < 0.1) brightness += 0.00001;
              form.stroke(galaxyStyle.brightWhite + brightness +')').line(ln);
            }
            else form.stroke(galaxyStyle.brightWhite + 0 +')').line(ln);
          } else {
            cursorNotFound = false;
            let side = Line.sideOfPt2D( ln, space.center );

            if (brightness < 0.1) brightness += 0.00001;
            form.stroke( (side > 0) ? galaxyStyle.brightWhite + brightness +')' : galaxyStyle.brightBlue + brightness +')').line( ln );
          }
          form.fillOnly(galaxyStyle.brightStars + 0.8 + ')').points( ln, 0.5);
        }
      }
    });
    space.bindMouse().bindTouch().play();
  }

  createApp();

  return true;
}

export default App;