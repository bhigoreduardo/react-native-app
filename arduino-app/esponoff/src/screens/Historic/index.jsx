import {StatusBar, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

import global from '../../styles/global';
import theme from '../../../theme.json';
import {
  StyledSafeAreaView,
  StyledView,
  StyledTextH1,
  StyledText,
} from './styles';

export default function Historic() {
  return (
    <StyledSafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.statuBar}
        barStyle="light-content"
      />
      <StyledView>
        <StyledTextH1>Historic</StyledTextH1>
      </StyledView>

      <Animatable.View animation="fadeInUpBig" style={[global.footer]}>
        <ScrollView
          style={global.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <StyledText>Novo histórico</StyledText>
        </ScrollView>
      </Animatable.View>
    </StyledSafeAreaView>
  );
}
