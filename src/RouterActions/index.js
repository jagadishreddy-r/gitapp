import {Action} from 'react-native-router-flux';
class RouterActions {
  goRepoScreen = user => {
    Action.repo({user});
  };
}
export default RouterActions;
