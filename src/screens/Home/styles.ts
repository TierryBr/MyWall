import styled from 'styled-components/native';

interface Props {
  empty?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 10px;
  background-color: #FFF;
`;

export const CardImage = styled.TouchableOpacity<Props>`
  background-color: ${({ empty }) => empty ? 'transparent' : '#FFF'};
  margin: 5px;

  flex-grow: 1;
  flex-basis: 0;
  border-radius: 8px;
  align-items: center;
  overflow: hidden;
`;
