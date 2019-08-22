class RepoModel {
  id;
  name;
  stargazersCount;
  forksCount;
  constructor(id, name, stargazersCount, forksCount) {
    this.id = id;
    this.name = name;
    this.stargazersCount = stargazersCount;
    this.forksCount = forksCount;
  }
}
export default RepoModel;
