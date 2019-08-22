import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Router, Scene} from 'react-native-router-flux';

import Repositories from './Repositories';
import Users from './Users';
import UserStore from '../../Stores/UserStore';
import UserServices from '../../Services/UserServices';

const userStore = new UserStore(new UserServices());
import translate from '../../Utils/language.utils';
import DropDown from './Picker';
@observer
class GitApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="users"
            title={translate('Users')}
            component={Users}
            userStore={userStore}
            initial
            renderRightButton={<DropDown userStore={userStore} />}
          />
          <Scene
            title={translate('Repos')}
            userLanguage={userStore.language}
            key="repos"
            component={Repositories}
          />
        </Scene>
      </Router>
    );
  }
}
export default GitApp;
