import repodata from '../Fixtures/repodata.json';
import userdata from '../Fixtures/userdata.json';
class UserFixture {
  getUsers = () => {
    return Promise.resolve(userdata);
  };

  getRepos() {
    return repodata;
  }
}
export default UserFixture;
