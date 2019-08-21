import RepoModel from '../RepoModel';
import {observable} from 'mobx';
class UserModel {
  id;
  userName;
  profilePic;
  repoLink;
  @observable repos = [];
  serviceName;
  constructor(id, userName, profilePic, repoLink, serviceName) {
    this.id = id;
    this.userName = userName;
    this.repoLink = repoLink;
    this.profilePic = profilePic;
    this.serviceName = serviceName;
  }
  getRepos() {
    if (this.repos.length === 0) {
      this.serviceName.getRepos().then(response =>
        response.map(obj => {
          this.repos.push(
            new RepoModel(
              obj.id,
              obj.name,
              obj.stargazers_count,
              obj.forks_count,
            ),
          );
        }),
      );
    }
  }
}
export default UserModel;