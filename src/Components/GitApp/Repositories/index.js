import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {View, FlatList} from 'react-native';
import Repository from './Repository';

@observer
class Repositories extends Component {
  componentDidMount() {
    this.props.user.getRepos();
  }
  render() {
    const {user} = this.props;
    return (
      <View>
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
