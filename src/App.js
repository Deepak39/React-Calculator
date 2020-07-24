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
