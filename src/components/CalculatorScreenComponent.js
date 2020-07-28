import React from 'react';

const CalculatorScreen = ({isDarkTheme}) => {

  const downShadow = isDarkTheme ? "dn-shadow-dark" : "dn-shadow-light";

  return (
    <div className={`screen ${downShadow}`}>
    {/* TODO */}
    {/* <div id='expression'>251</div>
    <div id='answer'>512</div> */}
    </div>
  );

}

export default CalculatorScreen;
