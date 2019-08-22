import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {FlatList} from 'react-native';
import Repository from './Repository';
import {Loader, ErrorMessage} from '../Users/StyledComponent';
import APISTATE from '../../../Constants/apiStates';

@observer
class Repositories extends Component {
  componentDidMount() {
    this.props.user.getRepos();
  }
  renderPage = () => {
    const {user} = this.props;
    if (user.repoPageState === APISTATE.loading) {
      return <Loader size="large" color="#0000ff" />;
    } else if (user.repoPageState === APISTATE.failure) {
      return <ErrorMessage>Please connect to internet</ErrorMessage>;
    }
    return (
      <FlatList
        data={user.repos}
        extraData={user.repos.slice()}
        renderItem={({item}) => <Repository repo={item} />}
      />
    );
  };
  render() {
    return <>{this.renderPage()}</>;
  }
}
export default Repositories;
