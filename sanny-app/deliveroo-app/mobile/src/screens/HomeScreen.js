import { useLayoutEffect, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import sanityClient from '../lib/sanity';
import Header from '../components/Header';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(`
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }
      `)
      .then((data) => setFeaturedCategories(data))
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }} className="bg-gray-100">
        <Categories />

        {
          featuredCategories?.length > 0 && featuredCategories.map((item) => (
            <FeaturedRow
              key={item._id}
              id={item._id}
              title={item.name}
              description={item.short_description}
            />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}
export default HomeScreen;