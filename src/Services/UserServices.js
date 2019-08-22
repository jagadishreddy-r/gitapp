class UserServices {
  getUsers(failure) {
    return fetch('https://api.github.com/users')
      .then(response => {
        return response.json();
      })
      .catch(e => {
        failure();
        return e;
      });
  }
  getRepos(link, failure) {
    return fetch(link)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        failure();
        return e;
      });
  }
}
export default UserServices;
