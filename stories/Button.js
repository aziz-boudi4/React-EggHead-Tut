import React from 'react';


const buttonStyles = {
  border: '0px solid transparent',
  borderRadius: 42,
  backgroundColor: '#A7F643',
  cursor: 'pointer',
  fontSize: 22,
  width:42,
  height:42,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick}) => (
  <button
    style={{ ...buttonStyles}}
    onClick={onClick}
  >
    <img src="https://s3-us-west-1.amazonaws.com/jogabocitypages/check-xs.png"/>
  </button>
);

Button.propTypes = {
  onClick: React.PropTypes.func
};

export default Button;
