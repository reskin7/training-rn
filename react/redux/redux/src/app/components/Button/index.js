import React from 'react';
import { func, string } from 'prop-types';

import styles from './styles.scss';

function Button({ text, onClick, className, children }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {text} {children}
    </button>
  );
}

Button.propTypes = {
  text: string,
  onClick: func.isRequired,
  className: string
};

export default Button;
