import RepoModel from './index';

describe('test for repomodel', () => {
  it('should test model', () => {
    const repoModel = new RepoModel(1, 'aaron', 5, 4);
    expect(repoModel.id).toBe(1);
    expect(repoModel.name).toBe('aaron');
    expect(repoModel.stargazersCount).toBe(5);
    expect(repoModel.forksCount).toBe(4);
  });
});
