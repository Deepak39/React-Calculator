import React from 'react';

const CalcButton = ({isDarkTheme, text}) => {

  const neumorph = isDarkTheme ? 'neumorph-btn-dark' : 'neumorph-btn-light';

  return <span className={`cal-btn ${neumorph}`}> {text} </span>;
}

export default CalcButton;
