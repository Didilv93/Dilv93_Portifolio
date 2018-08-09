export function OpacityWords (className, delay) {
  const words = document.getElementsByClassName(className);
    for(let i=0; i< (words.length); i++) {
      setTimeout(function() {
        words[i].style.opacity = 1;
      }, delay*(1+i));
    }
  return true;
}

export default OpacityWords;