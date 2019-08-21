import UserModel from '../Models/UserModel/index';
import UserServices from '../../Services/UserServices';
import {observable} from 'mobx';
class UserStore {
  serviceName;
  @observable users = [];
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getUsers() {
    this.serviceName.getUsers().then(response => {
      response.map(item => {
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
