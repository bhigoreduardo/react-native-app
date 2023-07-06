import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import theme from '../../../theme.json';
import {
  StyledView,
  StyledTouchableOpacity,
  StyledTouchableOpacityCenter,
} from './styles';

export default ({navigation}) => {
  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <StyledView>
      <StyledTouchableOpacity onPress={() => goTo('Historic')}>
        <FontAwesome name="history" size={20} style={{color: 'white'}} />
      </StyledTouchableOpacity>
      <StyledTouchableOpacityCenter onPress={() => goTo('Home')}>
        <MaterialIcons
          name="home"
          size={25}
          style={{color: theme.colors.primary}}
        />
      </StyledTouchableOpacityCenter>
      <StyledTouchableOpacity onPress={() => goTo('Profile')}>
        <FontAwesome name="user-circle" size={20} style={{color: 'white'}} />
      </StyledTouchableOpacity>
    </StyledView>
  );
};
