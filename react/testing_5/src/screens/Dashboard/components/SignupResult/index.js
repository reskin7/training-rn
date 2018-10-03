import React, { Fragment } from 'react';

function SignupResult ({handleButtonClick}) {
  return(
    <Fragment>
      <span> Usuario registrado exitosamente. </span>
      <button onClick={handleButtonClick}>Volver a cargar</button>
    </Fragment>
  )
};

export default SignupResult