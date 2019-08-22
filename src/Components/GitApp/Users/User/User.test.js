import {render, fireEvent} from 'react-native-testing-library';
import User from './index';
import UserModel from '../../../../Stores/Models/UserModel/index';
import RouterActions from '../../../../Utils/RouterActions';
import 'jest-styled-components';

describe('User', () => {
  it('should able to call get repo function', () => {
    const routerActions = new RouterActions();
    jest.spyOn(routerActions, 'goRepoScreen');
    const {getByTestId} = render(<User />);
    const cilckAble = getByTestId('onpress');
    fireEvent.onpress(cilckAble);
    expect(routerActions.goRepoScreen).toBeCalled();
  });
});
