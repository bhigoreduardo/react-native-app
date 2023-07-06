import styled from 'styled-components/native';
import theme from '../../../theme.json';

export const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${theme.colors.primary};
  flex: 1;
`;

export const StyledView = styled.View`
  justify-content: flex-end;
  margin: 50px auto 0 auto;
  padding-bottom: 50px;
`;

export const StyledTextH1 = styled.Text`
  align-items: center;
  font-size: 35px;
  color: #ffffff;
`;

export const StyledText = styled.Text`
  font-size: 28px;
  color: ${theme.colors.primary};
`;
