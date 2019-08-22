import {Actions} from 'react-native-router-flux';
class RouterActions {
  goRepoScreen = user => {
    Actions.repos({user, title: user.userName + "'s Repositories"});
  };
}
export default RouterActions;
