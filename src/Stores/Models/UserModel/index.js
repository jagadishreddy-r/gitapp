import RepoApi from '../../../Services/index.api';
class UserModel {
  id;
  userName;
  profilePic;
  repoLink;
  repos = [];
  constructor(id, userName, profilePic, repoLink) {
    this.id = id;
    this.userName = userName;
    this.repoLink = repoLink;
    this.profilePic = profilePic;
  }
  getRepos() {}
}
export default UserModel;
