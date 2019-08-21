import UserModel from './index.js';
import UserFixture from '../../../Services/UserFixture';
describe('usermodel', () => {
  it('should able create instance with given values ', () => {
    const userModel = new UserModel(1, 'jagadish', 'piclink', 'repolink');
    expect(userModel.id).toBe(1);
    expect(userModel.userName).toBe('jagadish');
    expect(userModel.profilePic).toBe('piclink');
    expect(userModel.repoLink).toBe('repolink');
  });
  it('should test the getrepos function ', () => {
    const userModel = new UserModel(
      1,
      'aaron',
      'hllo',
      'repolink',
      new UserFixture(),
    );
    userModel.getRepos();
    expect(userModel.repos.length).toBe(30);
  });
});