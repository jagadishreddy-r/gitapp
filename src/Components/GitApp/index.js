import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Repositories from './Repositories';

class GitApp extends Component {
  render() {
    return (
      <Router>
        <Scene component={Repositories} />
      </Router>
    );
  }
}
export default GitApp;
