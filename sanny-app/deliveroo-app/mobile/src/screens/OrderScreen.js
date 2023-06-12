import { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useDispatch } from "react-redux";

import { clearBasketitems } from "../features/basketSlice";

const OrderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      presentation: "fullScreenModal",
    });
  }, []);

  useEffect(() => {
    dispatch(clearBasketitems());
    setTimeout(() => navigation.navigate("delivery"), 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 items-center justify-center p-4">
      <Animatable.Image
        source={require("../assets/order.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-60 w-60"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#fff" />
    </SafeAreaView>
  );
};
export default OrderScreen;
