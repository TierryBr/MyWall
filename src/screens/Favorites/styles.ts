import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 40px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const TextFavorites = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE}px;
  color: ${({ theme }) => theme.COLORS.DARK};
  margin-top: 25px;
`;

export const FavoritesEmpty = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50%;
`;