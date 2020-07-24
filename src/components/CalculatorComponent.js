import React from 'react';
import CalculatorHeader from './CalculatorHeaderComponent';
import CalculatorBody from './CalculatorBodyComponent';
import CalculatorScreen from './CalculatorScreenComponent';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className="bgcolor-light neumorph-light calculator">
        <CalculatorHeader />
        <CalculatorScreen />
        <CalculatorBody />
      </div>
    );
  }
}

export default Calculator;
