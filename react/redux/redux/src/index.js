import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

import App from '~screens/App'; // eslint-disable-line import/first

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
