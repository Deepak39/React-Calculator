import React from 'react';
import Calculator from './components/CalculatorComponent';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isDarkTheme: true }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(isDark){
    this.setState({isDarkTheme: isDark});
  }

  render() { 
    return (
      <Calculator 
        isDarkTheme={this.state.isDarkTheme} 
        onClick={(isDark) => this.changeTheme(isDark)}
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
