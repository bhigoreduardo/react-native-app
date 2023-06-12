import { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { useRouter, Stack } from 'expo-router'

import {
  ScreenHeaderBtn,
  Welcome,
  PopularJobs,
  NearbyJobs,
} from '../src/components'
import { images, icons, COLORS, SIZES } from '../src/constants'

const Home = () => {
  const router = useRouter()
  const [searchTerms, setSearchTerms] = useState('')

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimensions='60%' />),
          headerRight: () => (<ScreenHeaderBtn iconUrl={images.avatar} dimensions='60%' />),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
            handleOnClick={() => {
              if(searchTerms)
                router.push(`search/${searchTerms}`)
            }}
          />

          <PopularJobs />

          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home