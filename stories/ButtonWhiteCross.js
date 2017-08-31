import React from 'react';


const buttonStyles = {
  border: '2px solid #eee',
  borderColor: "#FF3333",
  borderRadius: 42,
  backgroundColor: '#FF3333',
  cursor: 'pointer',
  fontSize: 22,
  width:42,
  height:42,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    <img src="https://s3-us-west-1.amazonaws.com/jogabocitypages/cross-xs-white.png"/>
  </button>
);

Button.propTypes = {
  onClick: React.PropTypes.func
};

export default Button;