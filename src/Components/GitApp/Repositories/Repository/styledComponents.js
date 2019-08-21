import styled from 'styled-components';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const RepoContainer = styled.View`
  background-color: blue;
  position: relative;

  color: white;
  display: flex;
  flex-direction: row;
  position: relative;

  align-items: center;
  width: ${width};
  height: 70;
  border-width: 0.5;
  border-color: white;
`;
export const RepoText = styled.Text`
  color: white;
  left: 15;
`;
export const ForkText = styled.Text`
  position: absolute;
  right: 15;
  color: white;
`;
export const StarText = styled.Text`
  position: absolute;
  left: 250;
  color: white;
`;
