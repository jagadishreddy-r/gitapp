import {observable} from 'mobx';
import UserModel from '../Models/UserModel/index';
import UserServices from '../../Services/UserServices';
import APISTATE from '../../Constants/apiStates';
class UserStore {
  serviceName;
  @observable users = [];
  @observable userPageState = APISTATE.loading;
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getUsers() {
    this.serviceName.getUsers().then(response => {
      response.map(item => {
        this.userPageState = APISTATE.success;

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
    }).catch = e => {
      this.userPageState = APISTATE.failure;
    };
  }
}
export default UserStore;
