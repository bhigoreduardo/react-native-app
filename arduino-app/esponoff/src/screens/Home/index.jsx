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

function Home() {
  return (
    <StyledSafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.statuBar}
        barStyle="light-content"
      />
      <StyledView>
        <StyledTextH1>Home</StyledTextH1>
      </StyledView>

      <Animatable.View animation="fadeInUpBig" style={[global.footer]}>
        <ScrollView
          style={global.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <StyledText>Novo home</StyledText>
        </ScrollView>
      </Animatable.View>
    </StyledSafeAreaView>
  );
}

export default Home;
