import React from 'react';


const buttonStyles = {
  border: '2px solid #eee',
  borderColor: "#A7F643",
  borderRadius: 42,
  backgroundColor: 'transparent',
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
    <img src="https://s3-us-west-1.amazonaws.com/jogabocitypages/check-xs-Green.png"/>
  </button>
);

Button.propTypes = {
  onClick: React.PropTypes.func
};

export default Button;