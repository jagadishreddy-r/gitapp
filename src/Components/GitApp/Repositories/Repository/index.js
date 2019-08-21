import React, {Component} from 'react';
import {Text} from 'react-native';
import {RepoContainer, ForkText, StarText, RepoText} from './styledComponents';
class Repository extends Component {
  render() {
    return (
      <RepoContainer>
        <RepoText>{this.props.repo.name}</RepoText>
        <StarText>{this.props.repo.stargazers_count}</StarText>
        <ForkText>{this.props.repo.forks_count}</ForkText>
      </RepoContainer>
    );
  }
}
export default Repository;
