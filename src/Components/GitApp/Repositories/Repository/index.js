import React, {Component} from 'react';
import {
  RepoContainer,
  RepoText,
  StarandFork,
  StarText,
  ForkText,
} from './styledComponents';
class Repository extends Component {
  render() {
    return (
      <RepoContainer>
        <RepoText>{this.props.repo.name}</RepoText>
        <StarandFork>
          <StarText>Stars:{this.props.repo.stargazers_count}</StarText>
          <ForkText>Forks:{this.props.repo.forks_count}</ForkText>
        </StarandFork>
      </RepoContainer>
    );
  }
}
export default Repository;
