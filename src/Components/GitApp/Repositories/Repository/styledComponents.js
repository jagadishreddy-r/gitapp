import styled from 'styled-components';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const RepoContainer = styled.View`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  width: ${width};
  height: 70;
  border-width: 0.5;
  border-color: grey;
`;
