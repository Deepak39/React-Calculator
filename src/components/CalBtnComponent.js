import React from 'react';

const CalcButton = ({isDarkTheme, text}) => {

  const neumorph = isDarkTheme ? 'neumorph-btn-dark' : 'neumorph-btn-light';
  const btnColor = isDarkTheme ? "dark-btn-color" : "light-btn-color";

  return <span className={`cal-btn ${btnColor} ${neumorph}`}> {text} </span>;
}

export default CalcButton;
