class UserServices {
  getUsers(link) {
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
