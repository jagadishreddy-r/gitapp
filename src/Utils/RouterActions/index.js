import {Actions} from 'react-native-router-flux';
class RouterActions {
  goRepoScreen = user => {
    Actions.repos({user});
  };
}
export default RouterActions;
