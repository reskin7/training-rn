import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Dashboard from './screens/Dashboard';
import store from './redux/store';

class App extends Component {
  render() {
    return <Provider store={store}><Dashboard /></Provider>;
  }
}

export default App;
