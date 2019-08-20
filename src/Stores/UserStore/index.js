import UserModel from '../Models/UserModel/index';
import UserServices from '../../Services/UserServices';

class UserStore {
  serviceName;
  users = [];
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getUsers() {
    const response = this.serviceName.getUsers();
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
  }
}
export default UserStore;
