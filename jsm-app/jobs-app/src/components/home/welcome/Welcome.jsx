import { useRouter } from 'expo-router'
import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'

import { jobsTypes } from '../../../utils'
import { SIZES, icons } from '../../../constants'

import styles from "./Welcome.style"

const Welcome = ({ searchTerms, setSearchTerms, handleOnClick }) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState(jobsTypes[0])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello John</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchTerms}
            onChangeText={(text) => setSearchTerms(text)}
            placeholder="What are you looking for?"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleOnClick}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobsTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setActiveJobType(item)
                router.push(`search/${item}`)
              }}
              style={styles.tab(activeJobType, item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
export default Welcome