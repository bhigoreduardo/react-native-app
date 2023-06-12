import { Image, Text, TouchableOpacity } from 'react-native';

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-3">
      <Image source={{ uri: imageUrl }} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-gray-100 font-bold">{title}</Text>
    </TouchableOpacity>
  )
}
export default CategoryCard;