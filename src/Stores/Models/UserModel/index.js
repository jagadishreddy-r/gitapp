import RepoModel from '../RepoModel';
import {observable} from 'mobx';
import API_STATE from '../../../Constants/apiStates';
class UserModel {
  id;
  userName;
  profilePic;
  repoLink;
  @observable repos = [];
  @observable repoPageState = API_STATE.loading;
  serviceName;
  constructor(id, userName, profilePic, repoLink, serviceName) {
    this.id = id;
    this.userName = userName;
    this.repoLink = repoLink;
    this.profilePic = profilePic;
    this.serviceName = serviceName;
  }

  onFailure = () => {
    this.repoPageState = API_STATE.failure;
  };
  getRepos() {
    if (this.repos.length === 0) {
      this.repoPageState = API_STATE.loading;
      this.serviceName.getRepos(this.repoLink, this.onFailure).then(response =>
        response.map(obj => {
          this.repoPageState = API_STATE.success;
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
