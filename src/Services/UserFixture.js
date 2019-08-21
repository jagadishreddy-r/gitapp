import repodata from '../Fixtures/repodata.json';
import userdata from '../Fixtures/userdata.json';
class UserFixture {
  getUsers = () => Promise.resolve(userdata);
  // new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(userdata);
  //   }, 0);
  // });
  getRepos() {
    return repodata;
  }
}
export default UserFixture;
