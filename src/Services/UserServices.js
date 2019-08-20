class UserServices {
  getUsers() {
    return fetch('https://api.github.com/users')
      .then(response => {
        return response.json();
      })
      .catch(e => {
        return e;
      });
  }
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
export default UserServices;
