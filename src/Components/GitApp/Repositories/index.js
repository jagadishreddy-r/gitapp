import React, {Component} from 'react';
import {observer} from 'mobx-react';

import {ActivityIndicator, FlatList, Text} from 'react-native';

import Repository from './Repository';
import {CenterAlign} from '../Users/StyledComponent';
import API_STATE from '../../../Constants/apiStates';

@observer
class Repositories extends Component {
  componentDidMount() {
    this.props.user.getRepos();
  }
  renderPage = () => {
    const {user} = this.props;

    switch (user.repoPageState) {
      case API_STATE.loading:
        return (
          <CenterAlign>
            <ActivityIndicator size="large" color="#0000ff" />
          </CenterAlign>
        );
      case API_STATE.failure:
        return (
          <CenterAlign>
            <Text>Please connect to internet</Text>
          </CenterAlign>
        );
      default:
        return (
          <FlatList
            data={user.repos}
            extraData={user.repos.slice()}
            renderItem={({item}) => <Repository repo={item} />}
          />
        );
    }
  };
  render() {
    return <>{this.renderPage()}</>;
  }
}
export default Repositories;
