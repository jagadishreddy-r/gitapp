import {Actions} from 'react-native-router-flux';
import translate from '../../Utils/language.utils';
class RouterActions {
  goRepoScreen = user => {
    Actions.repos({user, title: user.userName + translate('Repos')});
  };
}
export default RouterActions;
