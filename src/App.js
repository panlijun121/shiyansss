import React from 'react';
import Nav from './components/nav';
import './css/public.css';
import '../node_modules/antd/dist/antd.css';
import axios from 'axios';
import api from './common/api'

React.Component.prototype.axios=axios;
React.Component.prototype.api=api;

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
