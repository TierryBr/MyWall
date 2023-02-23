import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

interface Props {
  empty?: boolean;
}

export const CardImage = styled.TouchableOpacity<Props>`
  background-color: ${({ empty }) => empty ? 'transparent' : '#FFF'};
  margin: 5px;
  flex-grow: 1;
  flex-basis: 0;
  border-radius: 8px;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled(FastImage)`
  width: 170px;
  height: 260px;
  border-radius: 8px;
`;
