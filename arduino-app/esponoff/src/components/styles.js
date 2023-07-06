import styled from 'styled-components/native';
import theme from '../../theme.json';

export const StyledView = styled.View`
  height: 50px;
  background-color: ${theme.colors.primary};
  flex-direction: row;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledTouchableOpacityCenter = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #00c28b;
  margin-top: -20px;
`;
