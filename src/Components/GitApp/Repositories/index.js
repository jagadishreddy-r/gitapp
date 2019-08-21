import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {View, FlatList} from 'react-native';
import {RepoHeader, RepoText} from './styledComponents';
import Repository from './Repository';

@observer
class Repositories extends Component {
  constructor(props) {
    super(props);
    props.user.getRepos();
  }
  render() {
    const {user} = this.props;
    return (
      <View>
        <RepoHeader>
          <RepoText>Repositories</RepoText>
        </RepoHeader>
        <FlatList
          data={user.repos}
          extraData={user.repos.slice()}
          renderItem={({item}) => <Repository repo={item} />}
        />
      </View>
    );
  }
}
export default Repositories;
