import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {View, FlatList} from 'react-native';
import {RepoHeader, RepoText} from './styledComponents';
import Repository from './Repository';
import UserModel from '../../../Stores/Models/UserModel';
import UserServices from '../../../Services/UserServices';
const userModel = new UserModel(1, 2, 3, 'http', new UserServices());
userModel.getRepos();

@observer
class Repositories extends Component {
  render() {
    return (
      <View>
        <RepoHeader>
          <RepoText>Repositories</RepoText>
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
