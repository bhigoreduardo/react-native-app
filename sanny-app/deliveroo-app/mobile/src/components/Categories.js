import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import sanityClient, { urlFor } from '../lib/sanity';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "category"]
      `).then((data) => setCategories(data))
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.length > 0 && categories.map((item) => (
        <CategoryCard
          key={item._id}
          imageUrl={urlFor(item.image).width(200).url()}
          title={item.name}
        />
      ))}
    </ScrollView>
  )
}
export default Categories;