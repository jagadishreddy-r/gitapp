class UserModel {
  id;
  userName;
  profilePic;
  repoLink;
  constructor(id, userName, profilePic, repoLink) {
    this.id = id;
    this.userName = userName;
    this.repoLink = repoLink;
    this.profilePic = profilePic;
  }
}
export default UserModel;
