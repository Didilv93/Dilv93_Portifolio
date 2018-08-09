import React from 'react';

export const changesWithFocus = (props) => {
  let Title;
  let docVar = document.getElementById(props.ID);

  if(document.hasFocus()) Title = props.title.concat(' yes');
  else Title = props.title.concat(' no');

  docVar.innerHTML = Title;

  return (
    <title>Testee</title>
  );
};

export default changesWithFocus;