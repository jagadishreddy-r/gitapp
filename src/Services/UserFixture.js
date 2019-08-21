import repodata from '../Fixtures/repodata.json';
import userdata from '../Fixtures/userdata.json';
class UserFixture {
  getUsers = () => {
    return Promise.resolve(userdata);
  };

  getRepos = () => {
    return Promise.resolve(repodata);
  };
}
export default UserFixture;
