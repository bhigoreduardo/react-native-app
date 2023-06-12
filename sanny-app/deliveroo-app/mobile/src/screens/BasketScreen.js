import { useLayoutEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";

import { selectRestaurant } from "../features/restaurantSlice";
import {
  selectBasketItems,
  selectBasketTotal,
  removeFromBasket,
} from "../features/basketSlice";
import { urlFor } from "../lib/sanity";
import { currencyBRL } from "../utils/format";

const BasketScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      presentation: "modal",
    });
  }, []);

  useMemo(() => {
    const groups = items.reduce((acc, cur) => {
      (acc[cur.id] = acc[cur.id] || []).push(cur);
      return acc;
    }, {});

    setGroupedItemsInBasket(groups);
  }, [items]);

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="bg-gray-100 absolute top-3 right-3 rounded-full"
          >
            <XCircleIcon color="#00ccbb" width={50} height={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 my-5 px-4 py-3 bg-white">
          <Image
            source={{
              uri: urlFor(restaurant.imgUrl).url(),
            }}
            className="w-7 h-7 rounded-full bg-gray-300 p-4"
          />

          <Text className="flex-1">Delivery in 50-75min</Text>

          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00ccbb]">{items.length}x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.imgUrl).url(),
                }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                {currencyBRL.format(items[0]?.price)}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00ccbb]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              {currencyBRL.format(basketTotal)}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">{currencyBRL.format(4.98)}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              {currencyBRL.format(basketTotal + 4.98)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("order")}
            className="bg-[#00ccbb] rounded-lg p-4"
          >
            <Text className="font-bold text-white text-center text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BasketScreen;
