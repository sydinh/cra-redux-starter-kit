import React, { Children } from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    className={props.className}
  >
    {Children.toArray(props.children)}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: '',
  children: 'Button',
};

export default Button;
