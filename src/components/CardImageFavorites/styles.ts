import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
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


export const InfoPhoto = styled(LinearGradient)`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Image = styled(FastImage)`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  justify-content: flex-end;
`;

export const InfoTextPhoto = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
  color: ${({ theme }) => theme.COLORS.GRAY50};
  margin-left: 10px;
`;