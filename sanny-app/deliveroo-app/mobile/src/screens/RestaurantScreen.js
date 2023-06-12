import { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon, ChevronRightIcon, MapIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid';

import { urlFor } from '../lib/sanity';
import { setRestaurant } from '../features/restaurantSlice';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    params: {
      id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
    }
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id, imgUrl, title, rating, genre, address, short_description, dishes
      })
    )
  }, []);

  return (
    <>
      <BasketIcon />

      <ScrollView className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#419F7D" />
        </TouchableOpacity>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-2">
                <StarIcon size={20} color="#419F7D" opacity={0.5} />

                <Text className="text-xs text-gray-500">{rating}&nbsp;-&nbsp;
                  <Text className="text-green-500">{genre}</Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-2">
                <MapIcon size={20} color="#419F7D" opacity={0.5} />
                <Text className="text-xs text-gray-500">Nearby {address}</Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
        </View>

        <TouchableOpacity
          className="flex-row space-x-2 items-center border-y border-gray-300 p-4"
        >
          <QuestionMarkCircleIcon size={20} color="gray" opacity={0.5} />
          <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
          <ChevronRightIcon color="#419F7D" />
        </TouchableOpacity>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {
            dishes?.length > 0 && dishes.map((item) => (
              <DishRow
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.short_description}
                price={item.price}
                imgUrl={item.image}
              />
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}
export default RestaurantScreen;