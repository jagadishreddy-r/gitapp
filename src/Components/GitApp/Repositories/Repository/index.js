import React, {Component} from 'react';
import {} from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  RepoContainer,
  RepoText,
  StarandFork,
  StarText,
  ForkText,
  IconWithCount,
  ForkIcon,
} from './styledComponents';
class Repository extends Component {
  render() {
    return (
      <RepoContainer>
        <RepoText>{this.props.repo.name}</RepoText>
        <StarandFork>
          <IconWithCount>
            <Icon name="star" size={20} />
            <StarText> Stars:{this.props.repo.stargazers_count}</StarText>
          </IconWithCount>
          <IconWithCount>
            <ForkIcon source={require('./fork.png')} />
            <ForkText> Forks:{this.props.repo.forks_count}</ForkText>
          </IconWithCount>
        </StarandFork>
      </RepoContainer>
    );
  }
}
export default Repository;
