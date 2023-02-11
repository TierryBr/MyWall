import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 40px;
`;

export const Option = styled.View`
  padding: 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
  color: ${({ theme }) => theme.COLORS.GRAY500};
  padding-top: 4px;
`;

export const ContainerLine = styled.View`
  width: 120%;
  height: 1.3px;
  background-color: ${({ theme }) => theme.COLORS.GRAY500};
  align-self: center;
  border-radius: 2px;
`;
