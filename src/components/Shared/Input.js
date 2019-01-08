import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <input
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    className={props.className}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  value: '',
  placeholder: 'placeholder',
  className: '',
};

export default Input;
