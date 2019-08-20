class RepoService {
  getRepos(link) {
    return fetch(link)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        return e;
      });
  }
}
export default RepoService;
