class RepoService {
  getRepos() {
    return fetch('https://api.github.com/users/mojombo/repos')
      .then(response => {
        return response.json();
      })
      .catch(e => {
        return e;
      });
  }
}
export default RepoService;
