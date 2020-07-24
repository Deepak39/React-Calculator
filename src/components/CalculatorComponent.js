import React from 'react';
import CalculatorHeader from './CalculatorHeaderComponent';
import CalculatorBody from './CalculatorBodyComponent';
import CalculatorScreen from './CalculatorScreenComponent';

const Calculator = (props) => {

  const bgColor = props.isDarkTheme ? 'bgcolor-dark' : 'bgcolor-light';
  const neumorph = props.isDarkTheme ? 'neumorph-dark' : 'neumorph-light';

  return (
    <div className={`container ${bgColor}`}>
      <div className={`calculator ${bgColor} ${neumorph}`}>
        <CalculatorHeader {...props}/>
        <CalculatorScreen isDarkTheme={props.isDarkTheme} />
        <CalculatorBody isDarkTheme={props.isDarkTheme} />
      </div>
    </div>
  );
}

export default Calculator;
