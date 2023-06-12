import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import "react-native-url-polyfill/auto";

const Stack = createNativeStackNavigator();

import { store } from "./src/store";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import BasketScreen from "./src/screens/BasketScreen";
import OrderScreen from "./src/screens/OrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="auto" backgroundColor="#000" />
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="restaurant" component={RestaurantScreen} />
          <Stack.Screen name="basket" component={BasketScreen} />
          <Stack.Screen name="order" component={OrderScreen} />
          <Stack.Screen
            name="delivery"
            component={DeliveryScreen}
            options={{
              headerShown: false,
              presentation: "fullScreenModal",
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
