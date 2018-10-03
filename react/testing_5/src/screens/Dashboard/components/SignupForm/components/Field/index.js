import React from 'react';

const Field = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  syncError
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {
        ((syncError && <span>{syncError}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default Field;