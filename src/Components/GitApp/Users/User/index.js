import React, {Component} from 'react';
import {Text} from 'react-native';
import {ProfilePic, Name, Div} from './StyledComponents';
class User extends Component {
  // TODO: placeholder image
  render() {
    const {item} = this.props;
    return (
      <Div>
        <ProfilePic source={{uri: item.profilePic}} />
        <Name>{item.userName}</Name>
      </Div>
    );
  }
}
export default User;
