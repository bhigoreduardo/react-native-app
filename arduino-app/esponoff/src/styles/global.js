import {Dimensions, Platform, StyleSheet} from 'react-native';

import theme from '../../theme.json';

const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  // GLOBAL
  colorWhite: {color: '#ffff'},
  errorMsg: {
    color: theme.colors.wrong,
    fontSize: 14,
  },
  top: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // HEADER
  bodyPadding: {paddingLeft: 10},

  // SIGN IN
  logoSignIn: {
    flex: 1,
    top: 30,
    width: 150,
    height: null,
    resizeMode: 'contain',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  scrollViewSignIn: {
    width: '100%',
    marginBottom: -25,
  },
  textSignIn: {
    fontSize: 18,
    marginTop: 35,
    color: theme.colors.primary,
  },
  textBtnSignIn: {
    color: theme.colors.contrastText,
    fontSize: 18,
  },
  textBtnSignUp: {
    color: theme.colors.primary,
    fontSize: 18,
  },
  textInputSignIn: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: theme.colors.secondary,
    fontSize: 18,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 18,
  },
  signInColor: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginTop: 15,
  },

  // HOME
  labelTitleHome: {
    paddingTop: 70,
  },

  // CAPTURE
  photoResult: {
    height: 320,
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bg: {
    resizeMode: 'cover',
    height: DIMENSION_HEIGHT,
  },
});
