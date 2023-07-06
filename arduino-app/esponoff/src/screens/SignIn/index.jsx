import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import global from '../../styles/global';
import theme from '../../../theme.json';
import {
  StyledSafeAreaView,
  StyledView,
  StyledTextH1,
  StyledText,
  StyledTouchableOpacity,
  StyledViewAction,
  StyledViewButtonSign,
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [data, setData] = React.useState({
    email: '',
    password: '',
    buttonDisable: true,
    checkTextInputChange: false,
    viewPassword: true,
    isValidEmail: true,
    isValidPassword: true,
  });
  const textEmail = val => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
      });
    }
  };
  const textPassword = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleValidEmail = val => {
    if (val.trim().length > 1) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };
  const updateViewPassword = () => {
    setData({
      ...data,
      viewPassword: !data.viewPassword,
    });
  };

  const handleSignClick = async () => {
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  };
  const handleMessageButtonClick = () => {
    navigation.navigate('Home');
  };

  return (
    <StyledSafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.statuBar}
        barStyle="light-content"
      />
      <StyledView>
        <StyledTextH1>Sign In</StyledTextH1>
      </StyledView>

      <Animatable.View animation="fadeInUpBig" style={[global.footer]}>
        <ScrollView
          style={global.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {/* EMAIL */}
          <Text style={global.textSignIn}>Email</Text>
          <StyledViewAction>
            <MaterialIcons name="email" color={'black'} size={20} />
            <TextInput
              placeholder="Informe seu email"
              style={global.textInputSignIn}
              autoCapitalize="none"
              onChangeText={val => textEmail(val)}
              onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
            />
            {data.checkTextInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </StyledViewAction>
          {data.isValidEmail ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={global.errorMsg}>Compo obrigatório</Text>
            </Animatable.View>
          )}
          {/* SENHA */}
          <Text style={global.textSignIn}>Senha</Text>
          <StyledViewAction>
            <MaterialIcons name="lock" color={'black'} size={20} />
            <TextInput
              placeholder="Informe sua senha"
              secureTextEntry={data.viewPassword ? true : false}
              style={global.textInputSignIn}
              autoCapitalize="none"
              onChangeText={val => textPassword(val)}
            />
            <TouchableOpacity onPress={updateViewPassword}>
              {data.viewPassword ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </StyledViewAction>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={global.errorMsg}>
                A senha deve conter pelo menos 6 caracteres
              </Text>
            </Animatable.View>
          )}

          <StyledViewButtonSign>
            <TouchableOpacity
              disabled={!data.isValidEmail || !data.isValidPassword}
              style={global.signIn}
              onPress={() => {
                handleSignClick();
              }}>
              <LinearGradient
                colors={
                  !data.isValidEmail || !data.isValidPassword
                    ? ['#8a92a8', '#8a92a8']
                    : [theme.colors.statuBar, theme.colors.statuBar]
                }
                style={global.signIn}>
                <Text style={global.textBtnSignIn}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleMessageButtonClick()}
              style={[global.signIn, global.signInColor]}>
              <Text style={global.textBtnSignUp}>Cadastrar</Text>
            </TouchableOpacity>
          </StyledViewButtonSign>
        </ScrollView>
      </Animatable.View>
    </StyledSafeAreaView>
  );
}
