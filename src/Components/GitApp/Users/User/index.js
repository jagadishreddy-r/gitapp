import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {ProfilePic, UserName, UserItem} from './StyledComponents';
import RouterActions from '../../../../RouterActions';
const routerActions = new RouterActions();
class User extends Component {
  // TODO: placeholder image
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity
        data-testid="onpress"
        onPress={() => {
          routerActions.goRepoScreen(item);
        }}>
        <UserItem>
          <ProfilePic source={{uri: item.profilePic}} />
          <UserName>{item.userName}</UserName>
        </UserItem>
      </TouchableOpacity>
    );
  }
}
export default User;
