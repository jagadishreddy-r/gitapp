class UserStore {
  serviceName;
  users = [];
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getUsers() {
    this.users = this.serviceName.getUsers('https://api.github.com/users');
  }
}
export default UserStore;
