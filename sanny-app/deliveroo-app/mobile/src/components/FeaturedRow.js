import { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/solid';

import sanityClient from '../lib/sanity';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]
      `,
        { id: id }
      )
      .then((data) => setRestaurants(data?.restaurants))
  }, []);

  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#419F7D" />
      </View>

      <Text className="text-sm text-gray-500 px-4">{description}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        className="pt-4"
      >
        {
          restaurants?.length > 0 && restaurants.map((item) => (
            <RestaurantCard
              key={item._id}
              id={item._id}
              imgUrl={item.image}
              title={item.name}
              rating={item.rating}
              genre={item.type.name}
              address={item.address}
              short_description={item.short_description}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}
export default FeaturedRow;