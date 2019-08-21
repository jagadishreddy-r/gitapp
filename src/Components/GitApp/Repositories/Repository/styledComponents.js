import styled from 'styled-components';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const RepoContainer = styled.View`
  background-color: blue;

  display: flex;
  justify-content: space-between;
  width: ${width};
  padding: 10px;
  height: 70;
  margin: 1px;
`;
export const RepoText = styled.Text`
  color: white;
  font-size: 18px;
`;
export const ForkText = styled.Text`
  color: white;
`;
export const StarText = styled.Text`
  color: white;
`;
export const StarandFork = styled.View`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
`;
