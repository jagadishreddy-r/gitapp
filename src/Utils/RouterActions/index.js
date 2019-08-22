import {Actions} from 'react-native-router-flux';
import translate from '../../Utils/language.utils';
class RouterActions {
  goRepoScreen = user => {
    if (Actions.currentScene !== 'repos')
      Actions.repos({user, title: user.userName + translate('Repos')});
  };
}
export default RouterActions;
