import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Picker} from 'react-native';
import {observer} from 'mobx-react';

import Repositories from './Repositories';
import Users from './Users';
import UserStore from '../../Stores/UserStore';
import UserServices from '../../Services/UserServices';
import i18n from '../../Utils/I18n';
const userStore = new UserStore(new UserServices());

class GitApp extends Component {
  render() {
    i18n.locale = userStore.langauge;
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="users"
            title="Users"
            component={Users}
            userStore={userStore}
            initial
            renderRightButton={
              <Picker
                selectedValue={userStore.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                  userStore.changeLangauge(itemValue)
                }>
                <Picker.Item label="English" value="en" />
                <Picker.Item label="తెలుగు" value="tel" />
                <Picker.Item label="हिंदी" value="hin" />
              </Picker>
            }
          />
          <Scene key="repos" component={Repositories} />
        </Scene>
      </Router>
    );
  }
}
export default GitApp;
