import React from 'react'
import PropTypes from 'prop-types'
import Styles from './Button.module.css';

const Button = ({ children, type }) => <button className={Styles.button} type={type}>{children}</button>

Button.propTypes = {
  /**
   * This is a description for this prop.
   * Button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}
Button.defaultProps = {
  type: 'button',
}
export default Button