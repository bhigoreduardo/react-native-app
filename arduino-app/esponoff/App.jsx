import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainDrawer from './src/stacks/MainDrawer';
import Historic from './src/screens/Historic';
import Home from './src/screens/Home';
import ListDevices from './src/screens/ListDevices';
import NewDevice from './src/screens/NewDevice';
import Preload from './src/screens/Preload';
import Profile from './src/screens/Profile';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const Drawer = createDrawerNavigator();
const StackApp = createStackNavigator();
const stackOptions = {headerShown: false};

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Preload"
      drawerContent={() => <MainDrawer navigation={navigation} />}>
      <Drawer.Screen name="Historic" component={Historic} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ListDevices" component={ListDevices} />
      <Drawer.Screen name="NewDevice" component={NewDevice} />
      <Drawer.Screen name="Preload" component={Preload} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="SignIn" component={SignIn} />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
  );
}

function StackNavigator() {
  return (
    <StackApp.Navigator>
      <StackApp.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={stackOptions}
      />
    </StackApp.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
