import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const LoadingCenter = styled.View`
  flex: 1;
  justify-content: center;
`;


