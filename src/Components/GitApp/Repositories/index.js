import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {RepoHeader, RepoText} from './styledComponents';
import Repository from './Repository';
import UserModel from '../../../Stores/Models/UserModel';
import UserServices from '../../../Services/UserServices';
import {observer} from 'mobx-react';
const userModel = new UserModel(1, 2, 3, 'http', new UserServices());
userModel.getRepos();

@observer
class Repositories extends Component {
  render() {
    return (
      <View>
        <RepoHeader>
          <RepoText>Repository name</RepoText>
          <Text>Stars </Text>
          <Text>Forks</Text>
        </RepoHeader>
        <FlatList
          data={userModel.repos}
          extraData={userModel.repos.slice()}
          renderItem={({item}) => <Repository repo={item} />}
        />
      </View>
    );
  }
}
export default Repositories;
