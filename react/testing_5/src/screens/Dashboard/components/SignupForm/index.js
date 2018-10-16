import React from 'react'
import { Field, reduxForm } from 'redux-form'

import CustomField from './components/Field';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');

function SignupForm(props) {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field label="First name" component={CustomField} name="firstName" type="text" validate={required} />
      <Field label="Last name" component={CustomField} name="lastName" type="text" validate={required} />
      <Field label="Email" component={CustomField} name="email" type="email" validate={required} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default reduxForm({
  // a unique name for the form
  form: 'SignUp'
})(SignupForm)
