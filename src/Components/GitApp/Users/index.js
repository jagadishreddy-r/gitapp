import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';

import {observer} from 'mobx-react';
import {CenterAlign} from './StyledComponent';
import User from './User';
import API_STATE from '../../../Constants/apiStates';
@observer
class Users extends Component {
  componentDidMount() {
    this.props.userStore.getUsers();
  }
  renderPage = () => {
    const {userStore} = this.props;
    switch (userStore.userPageState) {
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
            data={userStore.users}
            keyExtractor={item => item.id}
            extraData={userStore.users.slice()}
            renderItem={({item}) => <User item={item} />}
          />
        );
    }
  };
  render() {
    return <>{this.renderPage()}</>;
  }
}
export default Users;
