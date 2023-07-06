import styled from "styled-components/native";
import theme from "../../theme.json";

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.primary};
`;

export const StyledView = styled.View`
  padding: 50px 10px 10px 10px;
  width: 100%;
  flex: 1;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 10px;
`;

export const StyledText = styled.Text`
  color: #fff;
  font-size: 18px;
  padding-left: 10px;
`;

export const StyledViewitem = styled.View`
  display: flex;
  flex-direction: row;
`;