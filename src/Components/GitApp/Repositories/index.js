import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import Repository from './Repository';
import APISTATE from '../../../Constants/apiStates';

@observer
class Repositories extends Component {
  componentDidMount() {
    this.props.user.getRepos();
  }
  renderPage = () => {
    const {user} = this.props;
    if (user.repoPageState === APISTATE.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else if (user.repoPageState === APISTATE.failure) {
      return <Text>Please connect to internet</Text>;
    }
    return (
      <FlatList
        data={user.repos}
        extraData={user.repos.slice()}
        renderItem={({item}) => <Repository repo={item} />}
      />
    );
  };
  render() {
    return <View>{this.renderPage()}</View>;
  }
}
export default Repositories;
