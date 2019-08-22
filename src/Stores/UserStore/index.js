import {observable, action} from 'mobx';
import UserModel from '../Models/UserModel/index';
import UserServices from '../../Services/UserServices';
import API_STATE from '../../Constants/apiStates';
class UserStore {
  serviceName;
  @observable users = [];
  @observable langauge;

  @observable userPageState = API_STATE.loading;
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  onFailure = () => {
    this.userPageState = API_STATE.failure;
  };
  @action.bound
  changeLangauge = value => {
    this.langauge = value;
  };
  getUsers() {
    this.serviceName.getUsers(this.onFailure).then(response => {
      response.map(item => {
        this.userPageState = API_STATE.success;

        this.users.push(
          new UserModel(
            item.id,
            item.login,
            item.avatar_url,
            item.repos_url,
            new UserServices(),
          ),
        );
      });
    });
  }
}
export default UserStore;
