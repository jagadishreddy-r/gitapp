import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Repositories from './Repositories';
import Users from './Users';
import UserStore from '../../Stores/UserStore';
const userStore = new UserStore();
class GitApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="users" component={Users} userStore={userStore} initial />
          <Scene key="repos" component={Repositories} />
        </Scene>
      </Router>
    );
  }
}
export default GitApp;
