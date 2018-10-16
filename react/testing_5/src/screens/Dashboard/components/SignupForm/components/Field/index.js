import React from 'react';

import './styles.css';

const Field = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  syncError
}) => (
  <div className="field-container">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default Field;