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