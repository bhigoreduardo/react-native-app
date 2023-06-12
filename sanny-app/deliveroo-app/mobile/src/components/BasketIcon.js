import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { currencyBRL } from "../utils/format";

const BasketIcon = () => {
  const navigation = useNavigation();

  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  if (items?.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("basket")}
        className="bg-[#00ccbb] mx-5 p-4 rounded-lg flex-row items-center space-x-2"
      >
        <Text className="text-white text-lg font-extrabold bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white text-center font-extrabold text-lg">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {currencyBRL.format(basketTotal)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default BasketIcon;
