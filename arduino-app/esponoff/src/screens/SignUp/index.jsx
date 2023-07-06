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

function SignUp() {
  const navigation = useNavigation();
  const [data, setData] = React.useState({
    user: {},
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    buttonDisable: true,
    checkTextInputChange: false,
    viewPassword: true,
    viewConfirmPassword: true,
    isValidName: true,
    isValidEmail: true,
    isValidPassword: true,
    isValidConfirm: true,
  });
  const textName = val => {
    if (val.trim().length > 3) {
      setData({
        ...data,
        name: val,
        isValidName: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        isValidName: false,
      });
    }
  };
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
  const textConfirm = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirm: true,
      });
    } else {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirm: false,
      });
    }
  };

  const updateViewPassword = () => {
    setData({
      ...data,
      viewPassword: !data.viewPassword,
    });
  };
  const updateConfirmPassword = () => {
    setData({
      ...data,
      viewConfirmPassword: !data.viewConfirmPassword,
    });
  };

  const handleSignClick = async () => {
    navigation.reset({
      routes: [{name: 'MainTab'}],
    });
  };

  return (
    <StyledSafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.statuBar}
        barStyle="light-content"
      />
      <StyledView>
        <StyledTouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <FontAwesome name="arrow-left" size={20} style={{color: '#fff'}} />
        </StyledTouchableOpacity>
        <StyledTextH1>Sign Up</StyledTextH1>
      </StyledView>

      <Animatable.View animation="fadeInUpBig" style={[global.footer]}>
        <ScrollView
          style={global.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {/* NOME */}
          <Text style={global.textSignIn}>Nome</Text>
          <StyledViewAction>
            <MaterialIcons name="person" color={'black'} size={20} />
            <TextInput
              placeholder="Informe seu nome"
              style={global.textInputSignIn}
              autoCapitalize="none"
              onChangeText={val => textName(val)}
            />
          </StyledViewAction>
          {data.isValidName ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={global.errorMsg}>
                O nome de usuário deve ter 4 caracteres
              </Text>
            </Animatable.View>
          )}
          {/* EMAIL */}
          <Text style={global.textSignIn}>Email</Text>
          <StyledViewAction>
            <MaterialIcons name="email" color={'black'} size={20} />
            <TextInput
              placeholder="Informe seu email"
              style={global.textInputSignIn}
              autoCapitalize="none"
              onChangeText={val => textEmail(val)}
            />
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
          {/* CONFIRME SENHA */}
          <Text style={global.textSignIn}>Confirmar senha</Text>
          <StyledViewAction>
            <MaterialIcons name="lock" color={'black'} size={20} />
            <TextInput
              placeholder="Confirme sua senha"
              secureTextEntry={data.viewConfirmPassword ? true : false}
              style={global.textInputSignIn}
              autoCapitalize="none"
              onChangeText={val => textConfirm(val)}
            />
            <TouchableOpacity onPress={updateConfirmPassword}>
              {data.viewConfirmPassword ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </StyledViewAction>
          {data.isValidConfirm ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={global.errorMsg}>
                A senha deve conter pelo menos 6 caracteres
              </Text>
            </Animatable.View>
          )}

          <StyledViewButtonSign>
            <TouchableOpacity
              style={global.signIn}
              onPress={() => {
                handleSignClick();
              }}>
              <LinearGradient
                colors={[theme.colors.statuBar, theme.colors.statuBar]}
                style={global.signIn}>
                <Text style={global.textBtnSignIn}>Cadastrar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </StyledViewButtonSign>
        </ScrollView>
      </Animatable.View>
    </StyledSafeAreaView>
  );
}

export default SignUp;
