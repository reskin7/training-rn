import React, { Fragment } from 'react';

function SignupResult ({handleButtonClick}) {
  return(
    <Fragment>
      <span className="result">User has been created successfully</span>
      <button onClick={handleButtonClick}>Reload form</button>
    </Fragment>
  )
};

export default SignupResult;
