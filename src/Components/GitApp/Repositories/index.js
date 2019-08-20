import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import Repository from './Repository';
import UserStore from '../../../Stores/UserStore';
import UserServices from '../../../Services/UserServices';
const userStore = new UserStore(new UserServices());
class Repositories extends Component {
  getRepos = () => {
    console.log(1);
    console.log(userStore.users.repos);
  };
  render() {
    return (
      <View>
        {this.getRepos()}
        <FlatList
          data={userStore.users.repos}
          renderItem={({item}) => <Repository repo={item} />}
        />
      </View>
    );
  }
}
export default Repositories;
