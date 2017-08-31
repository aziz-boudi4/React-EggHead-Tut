import React from 'react';


const buttonStyles = {
  border: '2px solid #eee',
  color: "#A7F643",
  borderColor: "#A7F643",
  borderRadius: 4,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: 16,
  width:240,
  height:40,
  padding: '4px 0px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.any,
  onClick: React.PropTypes.func,
};

export default Button;