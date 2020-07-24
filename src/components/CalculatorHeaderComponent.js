import React from 'react';

const CalculatorHeader = ({ isDarkTheme, onClick }) => {

  const bgColor = isDarkTheme ? 'bgcolor-dark' : 'bgcolor-light';
  const moreIcon = isDarkTheme ? '../images/menu_dark_theme.png' : '../images/menu_light_theme.png';
  const themeChangerIcon = isDarkTheme ? '../images/change_light_theme.png': '../images/change_to_dark_theme.png';
  const downShadow = isDarkTheme ? "dn-shadow-dark" : "dn-shadow-light";

  return (
    <div className={`header ${bgColor} ${downShadow}`}>
      <img height="19px" width="25px" src={moreIcon} alt="" />
      <img height="23px" width="23px" src={themeChangerIcon} alt="" onClick={() => onClick(!isDarkTheme)}/>
    </div>
  );
}

export default CalculatorHeader;
