import RotateWords from './rotate';
import OpacityWords from './opacity';

function ModeChoice () {

  const ButonHero = document.getElementsByClassName('scrollButonHero');
  setTimeout(function() {
    ButonHero[0].style.opacity = 1;
  }, 4000);
  OpacityWords('lineStyle', 1000);
  RotateWords('word', 4000, 4000);


  return true;
}

export function MotionStyle () {
  ModeChoice();
}

export default MotionStyle;