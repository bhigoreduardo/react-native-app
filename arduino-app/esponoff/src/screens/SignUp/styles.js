import styled from 'styled-components/native';
import theme from '../../../theme.json';

export const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${theme.colors.primary};
  flex: 1;
`;

export const StyledView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
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

export const StyledViewInputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  margin-bottom: 20px;
  padding-left: 20px;
  width: 60px;
`;

export const StyledViewAction = styled.View`
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
`;

export const StyledViewButtonSign = styled.View`
  align-items: center;
  margin-top: 50px;
  margin-bottom: 15px;
`;
