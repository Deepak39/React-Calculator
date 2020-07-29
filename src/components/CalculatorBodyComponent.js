import React from 'react';
import CalcButton from './CalBtnComponent';

const CalculatorBody = ({isDarkTheme}) => {
  
  const btns = [['7', '8', '9', '/'], ['4', '5', '6', '*'], ['1', '2', '3', '-'], ['0', '.', '%', '+']];
  // const btnCol = ['C', 'S', 'S', '='];

  return (
    <div className="btn-container">
      <div className="btn-rows">
        {/* <div className="row">
          <CalcButton isDarkTheme={isDarkTheme} text={1} />
          <CalcButton isDarkTheme={isDarkTheme} text={2} />
          <CalcButton isDarkTheme={isDarkTheme} text={3} />
          <CalcButton isDarkTheme={isDarkTheme} text={4} />
        </div>
        <div className="row">
          <CalcButton isDarkTheme={isDarkTheme} text={2} />
          <CalcButton isDarkTheme={isDarkTheme} text={1} />
          <CalcButton isDarkTheme={isDarkTheme} text={1} />
          <CalcButton isDarkTheme={isDarkTheme} text={1} />
        </div> */}

        {
          btns.map((arr) => (
            <div className="row">
              {arr.map((val) => (<CalcButton isDarkTheme={isDarkTheme} text={val} />))}
            </div>)
          )
        }
      </div>
      <div className="btn-col">
        <div></div>
      </div>
    </div>
  );

}

export default CalculatorBody;
