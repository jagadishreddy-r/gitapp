import RepoApi from '../../../Services/index.api';
class UserModel {
  id;
  userName;
  profilePic;
  repoLink;
  repos = [];
  serviceName;
  constructor(id, userName, profilePic, repoLink, serviceName) {
    this.id = id;
    this.userName = userName;
    this.repoLink = repoLink;
    this.profilePic = profilePic;
    this.serviceName = serviceName;
  }
  getRepos() {
    this.repos = this.serviceName.getRepos();
  }
}
export default UserModel;
