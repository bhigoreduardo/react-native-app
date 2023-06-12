import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";
// import MapView, { Marker } from "react-native-maps";

import { selectRestaurant } from "../features/restaurantSlice";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1">
      <View className="flex-row justify-between items-center p-5">
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <XCircleIcon color="#fff" size={30} />
        </TouchableOpacity>

        <Text className="font-light text-white text-lg">Order Help</Text>
      </View>

      <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-lg font-bold">45-55 Minutes</Text>
          </View>

          <Image
            source={require("../assets/delivery.gif")}
            className="h-20 w-20"
          />
        </View>

        <Progress.Bar size={30} indeterminate={true} color="#00ccbb" />

        <Text className="mt-3 text-gray-300">
          Your order at {restaurant.title} is being prepared
        </Text>
      </View>

      {/* <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView> */}

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-26 p-5">
        <View className="flex-1">
          <Text className="text-lg">Sonny Sangha</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-[#00ccbb] text-xl font-bold">Call</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};
export default DeliveryScreen;
