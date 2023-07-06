import {useEffect, useState} from 'react';
import {FlatList, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

import theme from '../../../theme.json';
import global from '../../styles/global';
import {
  StyledSafeAreaView,
  StyledView,
  StyledTextH1,
  StyledText,
  StyledTextSecondary,
} from './styles';

export default function ListDevices() {
  const [foundEspList, setFoundEspList] = useState([]);

  async function listEsp() {
    try {
      const localFoundEspList =
        JSON.parse(await AsyncStorage.getItem('@devices_keys')) || [];
      setFoundEspList(localFoundEspList);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    listEsp();
  }, []);

  return (
    <StyledSafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.statuBar}
        barStyle="light-content"
      />
      <StyledView>
        <StyledTextH1>List Devices</StyledTextH1>
      </StyledView>

      <Animatable.View animation="fadeInUpBig" style={[global.footer]}>
        <View
          style={global.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <StyledText>Encontre seu ESP8266!</StyledText>
          <StyledTextSecondary>
            Clique no botão abaixo para pesquisar os ESP8266 pela rede!
          </StyledTextSecondary>

          <View>
            <FlatList
              data={foundEspList}
              renderItem={({item}) => (
                <>
                  <Text style={{color: 'black', marginTop: 20}}>
                    {item.key}
                  </Text>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{color: 'black', marginTop: 20}}>
                      + Adicionar
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            />
          </View>
        </View>
      </Animatable.View>
    </StyledSafeAreaView>
  );
}
