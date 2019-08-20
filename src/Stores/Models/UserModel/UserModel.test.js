describe('usermodel', () => {
  it('should able create instance with given values ', () => {
    const userModel = new UserModel(1, 'jagadish', 'piclink', 'repolink');
    expect(userModel.id).tobe(1);
    expect(userModel.userName).tobe('jagadish');
    expect(userModel.profilePic).tobe('piclink');
    expect(userModel.repoLink).tobe('repolink');
  });
});
