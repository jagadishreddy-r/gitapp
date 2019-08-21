import React, {Component} from 'react';
import {Text} from 'react-native';
import {ProfilePic, UserName, UserItem} from './StyledComponents';
class User extends Component {
  // TODO: placeholder image
  render() {
    const {item} = this.props;
    return (
      <UserItem>
        <ProfilePic source={{uri: item.profilePic}} />
        <UserName>{item.userName}</UserName>
      </UserItem>
    );
  }
}
export default User;
