import React, {Component} from 'react';

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
import translate from '../../../../Utils/language.utils';
import {observer} from 'mobx-react';
@observer
class Repository extends Component {
  render() {
    return (
      <RepoContainer>
        <RepoText>{this.props.repo.name}</RepoText>
        <StarandFork>
          <IconWithCount>
            <Icon name="star" size={20} />
            <StarText>
              {' '}
              {translate('Stars')}:{this.props.repo.stargazersCount}
            </StarText>
          </IconWithCount>
          <IconWithCount>
            <ForkIcon source={require('./fork.png')} />
            <ForkText>
              {' '}
              {translate('Forks')}:{this.props.repo.forksCount}
            </ForkText>
          </IconWithCount>
        </StarandFork>
      </RepoContainer>
    );
  }
}
export default Repository;
