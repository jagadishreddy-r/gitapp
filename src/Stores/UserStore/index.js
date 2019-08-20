import UserModel from '../Models/UserModel/index';
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
        new UserModel(item.id, item.login, item.avatar_url, item.repos_url),
      );
    });
  }
}
export default UserStore;
