import styled from 'styled-components';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const RepoContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: black;

  display: flex;
  justify-content: space-between;
  width: ${width};
  padding: 10px;
  height: 70;
  margin: 1px;
`;
export const RepoText = styled.Text`
  color: black;
  font-size: 18px;
`;
export const ForkText = styled.Text`
  color: black;
`;
export const StarText = styled.Text`
  color: black;
`;
export const StarandFork = styled.View`
  width: 200;
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: space-around;
`;
export const IconWithCount = styled.View`
  background: #f5fcff;
  padding: 2px;
  display: flex;
  flex-direction: row;
`;
export const ForkIcon = styled.Image`
  width: 15;
  height: 15;
`;
