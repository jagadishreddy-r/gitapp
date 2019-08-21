import React, {Component} from 'react';
import {FlatList} from 'react-native';

import UserStore from '../../../Stores/UserStore';
import User from './User';
import {observer} from 'mobx-react';
import UserServices from '../../../Services/UserServices';
const userStore = new UserStore(new UserServices());
userStore.getUsers();
@observer
class Users extends Component {
  render() {
    const users = userStore.users;
    return (
      <>
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          extraData={users.slice()}
          renderItem={({item}) => <User item={item} />}
        />
      </>
    );
  }
}
export default Users;
