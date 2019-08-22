import RepoModel from '../RepoModel';
import {observable} from 'mobx';
import APISTATE from '../../../Constants/apiStates';
class UserModel {
  id;
  userName;
  profilePic;
  repoLink;
  @observable repos = [];
  @observable repoPageState = APISTATE.loading;
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
      this.serviceName.getRepos(this.repoLink).then(response =>
        response.map(obj => {
          this.repoPageState = APISTATE.success;
          this.repos.push(
            new RepoModel(
              obj.id,
              obj.name,
              obj.stargazers_count,
              obj.forks_count,
            ),
          );
        }),
      ).catch = e => {
        this.repoPageState = APISTATE.failure;
        console.log(e);
      };
    }
  }
}
export default UserModel;
