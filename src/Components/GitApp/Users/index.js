import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {observer} from 'mobx-react';
import {Loader, ErrorMessage} from './StyledComponent';
import User from './User';
import APISTATE from '../../../Constants/apiStates';
@observer
class Users extends Component {
  renderPage = () => {
    const {userStore} = this.props;
    if (userStore.userPageState === APISTATE.loading) {
      return <Loader size="large" color="#0000ff" />;
    } else if (userStore.userPageState === APISTATE.failure) {
      return <ErrorMessage>Please connect to internet</ErrorMessage>;
    }
    return (
      <FlatList
        data={userStore.users}
        keyExtractor={item => item.id}
        extraData={userStore.users.slice()}
        renderItem={({item}) => <User item={item} />}
      />
    );
  };
  render() {
    return <>{this.renderPage()}</>;
  }
}
export default Users;
