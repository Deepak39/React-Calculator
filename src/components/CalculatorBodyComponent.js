import React from 'react';
import CalcButton from './CalBtnComponent';

const CalculatorBody = ({isDarkTheme}) => {
  
  // const btns = [['7', '8', '9', '/'], ['4', '5', '6', '*'], ['1', '2', '3', '-'], ['0', '.', '%', '+']];
  // const btnCol = ['C', 'S', 'S', '='];

  return (
    <div className="btn-container">
      <div className="btn-rows">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );

}

export default CalculatorBody;
