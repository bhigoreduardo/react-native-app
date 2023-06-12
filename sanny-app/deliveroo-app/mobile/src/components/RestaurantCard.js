import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid';

import { urlFor } from '../lib/sanity';

const RestaurantCard = ({
  id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('restaurant', {
          id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
        })
      }}
      className="bg-white shadow mr-3"
    >
      <Image source={{ uri: urlFor(imgUrl).url() }} className="h-36 w-64 rounded-sm" />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row space-x-1">
          <StarIcon color="#419F7D" size={20} />
          <Text className="text-sm text-gray-500">
            <Text style={{ color: '#419F7D' }}>{rating}</Text>
            &nbsp;-&nbsp;{genre}
          </Text>
        </View>

        <View className="flex-row space-x-1">
          <MapPinIcon color="#ccc" size={20} />
          <Text className="text-sm text-gray-500">
            Nearby&nbsp;-&nbsp;{address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default RestaurantCard;