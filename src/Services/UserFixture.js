import repodata from '../Fixtures/repodata.json';
import userdata from '../Fixtures/userdata.json';
class UserFixture {
  getUsers() {
    return userdata;
  }
  getRepos() {
    return repodata;
  }
}
export default UserFixture;
