import React, { Component } from 'react';
import './App.css';
import {Checkboxblk} from './checkBox';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Checkboxblk /> 
      </Provider> 
      </div>
    );
  }
}

export default App;
