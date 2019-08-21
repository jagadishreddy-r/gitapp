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
export default UserServices;
