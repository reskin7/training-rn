import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function SignupResult({ handleButtonClick }) {
  return (
    <Fragment>
      <span className="result">User has been created successfully</span>
      <button type="submit" onClick={handleButtonClick}>
        Reload form
      </button>
    </Fragment>
  );
}

SignupResult.propTypes = {
  handleButtonClick: PropTypes.func.isRequired
};

export default SignupResult;
