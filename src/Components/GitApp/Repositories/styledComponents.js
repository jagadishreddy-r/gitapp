import styled from 'styled-components';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const RepoHeader = styled.View`
  background-color: white;
  color: white;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: ${width};
  height: 70;
  border-width: 0.5;
  border-color: grey;
`;
export const RepoText = styled.Text`
  left: 15;
`;
