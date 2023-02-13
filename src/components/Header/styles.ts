import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled(LinearGradient)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 30px;
`;