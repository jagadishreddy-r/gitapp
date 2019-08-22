import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Repositories from './Repositories';
import Users from './Users';
import UserStore from '../../Stores/UserStore';
import UserServices from '../../Services/UserServices';
const userStore = new UserStore(new UserServices());
userStore.getUsers();
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
