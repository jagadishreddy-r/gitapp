import {observable, action} from 'mobx';
import UserModel from '../Models/UserModel/index';
import UserServices from '../../Services/UserServices';
class UserStore {
  serviceName;
  @observable users = [];
  @observable langauge;
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  @action.bound
  changeLangauge = value => {
    this.langauge = value;
  };
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
