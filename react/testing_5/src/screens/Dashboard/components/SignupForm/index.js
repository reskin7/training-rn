import React from 'react'
import { Field, reduxForm } from 'redux-form'

import CustomField from './components/Field';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');

function SignupForm(props) {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="firstName">First Name</label>
          <Field component={CustomField} name="firstName" component="input" type="text" validate={required} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field component={CustomField} name="lastName" component="input" type="text" validate={required}/>
        </div>
          <Field label="Email" component={CustomField} name="email" component="input" type="email" validate={required} />
        <button type="submit">Submit</button>
    </form>
  );
}

export default reduxForm({
  // a unique name for the form
  form: 'SignUp'
})(SignupForm)
