import {observable, action} from 'mobx';
import UserModel from '../Models/UserModel/index';
import UserServices from '../../Services/UserServices';
import API_STATE from '../../Constants/apiStates';
import {setLocale} from '../../Utils/language.utils';
class UserStore {
  serviceName;
  @observable users = [];
  @observable language = 'en';

  @observable userPageState = API_STATE.loading;
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  onFailure = () => {
    this.userPageState = API_STATE.failure;
  };
  @action.bound
  changeLanguage(selectedLanguage) {
    this.language = selectedLanguage;
    setLocale(selectedLanguage);
    console.log(this.language);
  }
  getUsers() {
    this.users.push(
      new UserModel(
        'vsd',
        'vjtyjtdyjdtyjdtyjdtyjddsv',
        'vdsvdv',
        'vdsvd',
        new UserServices(),
      ),
    );
    this.serviceName.getUsers(this.onFailure).then(response => {
      response.map(item => {
        this.userPageState = API_STATE.success;

        this.users.push(
          new UserModel(
            item.id,
            item.login,
            item.avatar_url,
            item.repos_url,
            new UserServices(),
          ),
        );
      });
    });
  }
}
export default UserStore;
