import RotateWords from './rotate';
import OpacityWords from './opacity';

function ModeChoice () {

  OpacityWords('lineStyle', 1000);
  RotateWords('word', 4000, 4000);

  return true;
}

export function MotionStyle () {
  ModeChoice();
}

export default MotionStyle;