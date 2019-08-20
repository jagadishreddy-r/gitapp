import RepoApi from '../../../Services/index.api';
import RepoModel from '../RepoModel';
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
    this.serviceName.getRepos().map(obj => {
      this.repos.push(
        new RepoModel(
          obj.id,
          obj.owner.login,
          obj.stargazers_count,
          obj.forks_count,
        ),
      );
    });
  }
}
export default UserModel;
