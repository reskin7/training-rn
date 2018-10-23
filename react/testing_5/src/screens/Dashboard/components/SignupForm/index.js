import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import CustomField from '../../../../components/Field';

import { required } from './utils';

function SignupForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <Field label="First name" component={CustomField} name="firstName" type="text" validate={required} />
      <Field label="Last name" component={CustomField} name="lastName" type="text" validate={required} />
      <Field label="Email" component={CustomField} name="email" type="email" validate={required} />
      <button type="submit">Submit</button>
    </form>
  );
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'SignUp'
})(SignupForm);
