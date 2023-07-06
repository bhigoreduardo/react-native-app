import {useState, useEffect} from 'react';
import {StatusBar, TouchableOpacity, View, Text, FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import dgram from 'react-native-udp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TcpSocket from 'react-native-tcp-socket';

import theme from '../../../theme.json';
import global from '../../styles/global';
import {
  StyledSafeAreaView,
  StyledView,
  StyledTextH1,
  StyledText,
  StyledTextSecondary,
  StyledViewButton,
  StyledActivityIndicator,
} from './styles';

export default function NewDevice() {
  const [loading, setLoading] = useState(false);

  const socket = dgram.createSocket('udp4');
  const port = 12345; // UDP_PORT
  // const port = 123; SOCKET_PORT
  const notFoundText = 'Aqui vai o resultado';
  const [foundEspList, setFoundEspList] = useState([{key: notFoundText}]);
  const [countEspList, setCountEspList] = useState(1);

  function beginSearch() {
    setLoading(true);
    setFoundEspList([{key: notFoundText}]);
    const options = {
      port: port,
      host: '192.168.0.255', // host do server
      localAddress: '127.0.0.1',
      reuseAddress: true,
    };
    tryToConnect(options);
  }
  function tryToConnect(options) {
    socket.bind(options.port);
    socket.once('listening', function () {
      socket.send(
        'ESP-ACK',
        undefined,
        undefined,
        options.port,
        options.host,
        function (err) {
          if (err) {
            throw err;
          }
          console.log('Message sent!');
        },
      );
    });
  }
  function cancelSearch() {
    setLoading(false);
    socket.close();
  }
  socket.on('message', function (msg, info) {
    let buffer = {data: msg.toString()};

    if (buffer.data !== 'ESP-ACK') {
      console.log('data.data', buffer.data);
      let localFoundEspList = foundEspList;
      if (foundEspList.find(i => i.key == notFoundText)) {
        localFoundEspList = [];
      }
      const foundEsp = [
        ...localFoundEspList,
        {
          key: 'ESP #' + countEspList + ' :: ' + buffer.data,
          // ip: buffer.data,
          // idx: countEspList,
        },
      ];
      setFoundEspList(foundEsp);
      setCountEspList(countEspList + 1);
    }
    console.log('Message received', msg);
  });
  useEffect(() => {
    if (foundEspList.length > 1) {
      console.log('achei um esp8266 na rede!', foundEspList[-1]?.host);
    }
  }, [foundEspList]);

  async function storageData(value) {
    try {
      const localFoundEspList =
        JSON.parse(await AsyncStorage.getItem('@devices_keys')) || [];
      localFoundEspList.push(value);
      await AsyncStorage.setItem(
        '@devices_keys',
        JSON.stringify(localFoundEspList),
      );
    } catch (e) {
      console.log(e);
    }
  }

  /* Find IP address */
  const [espList, setEspList] = useState([]);
  function getConnectHandShake() {
    for (let i = 0; i < 256; i++) {
      const options = {
        port: port,
        host: '192.168.0.' + i,
        localAddress: '0.0.0.0',
        reuseAddress: true,
      };

      connectHandShake(options);
    }
  }
  function connectHandShake(options) {
    const client = TcpSocket.createConnection(options, () => {
      // Write on the socket
      client.write('Hello server!');
      console.log('Hello server!');

      // Close socket
      client.end('SYN\n', 'ascii', () => console.log('sended'));
    });

    client.on('data', function (data) {
      console.log('message was received', data);
      const buffer = {
        response: data.toString(),
      };

      if (buffer.response === 'SYN-ACK') {
        client.end('ACK', 'ascii');
      } else {
        client.end('NACK', 'ascii');
      }

      setEspList([...espList, {ip: options.host, name: 'Unknown ESP'}]);
    });

    client.on('error', function (error) {
      console.log(error);
    });

    client.on('close', function () {
      console.log('Connection closed!');
    });
  }

  return (
    <StyledSafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.statuBar}
        barStyle="light-content"
      />
      <StyledView>
        <StyledTextH1>New Device</StyledTextH1>
      </StyledView>

      <Animatable.View animation="fadeInUpBig" style={[global.footer]}>
        <View
          style={global.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <StyledText>Encontre seu ESP8266!</StyledText>
          <StyledTextSecondary>
            Clique no botão abaixo para pesquisar os ESP8266 pela rede!
          </StyledTextSecondary>
          <StyledViewButton>
            {!loading ? (
              <TouchableOpacity
                onPress={() => beginSearch()}
                style={[global.signIn, global.signInColor]}>
                <Text style={global.textBtnSignUp}>Pesquisar</Text>
              </TouchableOpacity>
            ) : (
              <>
                <StyledActivityIndicator
                  size="large"
                  color={theme.colors.primary}
                />
                <TouchableOpacity
                  onPress={() => cancelSearch()}
                  style={[global.signIn, global.signInColor]}>
                  <Text style={global.textBtnSignUp}>Cancelar</Text>
                </TouchableOpacity>
              </>
            )}
          </StyledViewButton>

          <View>
            <FlatList
              data={foundEspList}
              renderItem={({item}) => (
                <>
                  <Text style={{color: 'black', marginTop: 20}}>
                    {item.key}
                  </Text>
                  <TouchableOpacity onPress={() => storageData(item)}>
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
