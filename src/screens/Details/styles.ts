import styled from 'styled-components/native';
import { IconButton, Button } from 'react-native-paper';


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 40px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Buttons = styled.View`
  margin-bottom: 20px;
  height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

`;

export const ButtonDownload = styled(Button)`
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.DARK};
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const TextButtonDownload = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
  color: ${({ theme }) => theme.COLORS.DARK};
`;