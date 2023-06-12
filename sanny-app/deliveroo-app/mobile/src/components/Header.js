import { Image, Text, TextInput, View } from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/solid';

import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <View className="flex-row pb-3 items-center mx-4 space-x-4">
        <Image source={logo} className="w-7 h-7 bg-gray-300 rounded-full p-4" />

        <View className="flex-1">
          <Text className="font-bold text-sm text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#419F7D" />
          </Text>
        </View>

        <UserIcon size={35} color="#419F7D" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="#419F7D" size={20} />
          <TextInput
            placeholder="Restaurants and cousines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#419F7D" />
      </View>
    </>
  )
}
export default Header;