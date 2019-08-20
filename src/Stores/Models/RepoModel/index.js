class RepoModel {
  id;
  name;
  stargazers_count;
  forks_count;
  constructor(id, name, stargazers_count, forks_count) {
    this.id = id;
    this.name = name;
    this.stargazers_count = stargazers_count;
    this.forks_count = forks_count;
  }
}
export default RepoModel;
