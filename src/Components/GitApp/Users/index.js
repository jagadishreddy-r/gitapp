import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {observer} from 'mobx-react';

import User from './User';
import UserStore from '../../../Stores/UserStore';
import UserServices from '../../../Services/UserServices';

const userStore = new UserStore(new UserServices());
userStore.getUsers();
@observer
class Users extends Component {
  render() {
    const {users} = userStore;
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
