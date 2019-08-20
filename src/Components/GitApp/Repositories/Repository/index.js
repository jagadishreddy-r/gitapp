import React, {Component} from 'react';
import {Text} from 'react-native';
import {RepoContainer} from './styledComponents';
class Repository extends Component {
  render() {
    return (
      <RepoContainer>
        <Text>{this.props.repo.name}</Text>
        <Text>{this.props.repo.stargazers_count}</Text>
        <Text>{this.props.repo.forks_count}</Text>
      </RepoContainer>
    );
  }
}
export default Repository;
