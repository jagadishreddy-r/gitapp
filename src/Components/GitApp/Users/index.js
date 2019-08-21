import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {observer} from 'mobx-react';

import User from './User';

@observer
class Users extends Component {
  render() {
    const {users} = this.props;
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
