import React from 'react';


const buttonStyles = {
  backgroundColor: 'transparent',
  border: "none",
  cursor: 'pointer',
  fontSize: 22,
  width:44,
  height:44,
  padding: '3px 10px',
  margin: 10,
  zIndex:10
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    <img src="https://s3-us-west-1.amazonaws.com/jogabocitypages/chevron-up-xs.png"/>
  </button>
);

Button.propTypes = {
  onClick: React.PropTypes.func
};

export default Button;