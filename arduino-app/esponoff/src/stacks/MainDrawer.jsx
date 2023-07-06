import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  StyledSafeAreaView,
  StyledView,
  StyledTouchableOpacity,
  StyledViewitem,
  StyledText,
} from './styles';

export default function MainDrawer(props) {
  return (
    <StyledSafeAreaView>
      <StyledView>
        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('Historic')}>
          <StyledViewitem>
            <MaterialIcons name="favorite" size={28} style={{color: 'white'}} />
            <StyledText>Historic</StyledText>
          </StyledViewitem>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('Home')}>
          <StyledViewitem>
            <MaterialIcons name="home" size={28} style={{color: 'white'}} />
            <StyledText>Home</StyledText>
          </StyledViewitem>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('ListDevices')}>
          <StyledViewitem>
            <MaterialIcons name="add" size={28} style={{color: 'white'}} />
            <StyledText>List Devices</StyledText>
          </StyledViewitem>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('NewDevice')}>
          <StyledViewitem>
            <MaterialIcons name="add" size={28} style={{color: 'white'}} />
            <StyledText>New Device</StyledText>
          </StyledViewitem>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('Preload')}>
          <StyledViewitem>
            <MaterialIcons name="refresh" size={28} style={{color: '#fff'}} />
            <StyledText>Preload</StyledText>
          </StyledViewitem>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}>
          <StyledViewitem>
            <MaterialIcons name="person" size={28} style={{color: '#fff'}} />
            <StyledText>Profile</StyledText>
          </StyledViewitem>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('SignIn')}>
          <StyledViewitem>
            <MaterialIcons name="login" size={28} style={{color: '#fff'}} />
            <StyledText>SignIn</StyledText>
          </StyledViewitem>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')}>
          <StyledViewitem>
            <MaterialIcons name="person-add" size={28} style={{color: '#fff'}} />
            <StyledText>SignUp</StyledText>
          </StyledViewitem>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledSafeAreaView>
  );
}
