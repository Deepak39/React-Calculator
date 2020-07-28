import React from 'react';
import Calculator from './components/CalculatorComponent';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isDarkTheme: true }
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange(isDark){
    this.setState({isDarkTheme: isDark});
  }

  render() { 
    return (
      <Calculator 
        isDarkTheme={this.state.isDarkTheme} 
        onClick={(isDark) => this.handleThemeChange(isDark)}
      />
    );
  }
}

export default App;


/*----------------------
*** 
Author: Deepak39
GitHub: https://github.com/Deepak39/React-Calculator 
***

*** Follow me on ****
instagram: @yadav_deepakk

-----------------------*/
