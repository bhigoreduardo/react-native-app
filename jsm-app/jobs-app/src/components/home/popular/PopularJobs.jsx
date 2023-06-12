import { useRouter } from 'expo-router'
import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native'

import useFetch from '../../../hook/useFetch'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { COLORS, SIZES } from '../../../constants'

import styles from './PopularJobs.style'

const PopularJobs = () => {
  const router = useRouter()
  const [selectedJob, setSelectedJob] = useState()
  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: 'Python',
      num_pages: 1,
    },
  )

  const handleCardPress = (item) => {
    setSelectedJob(item?.job_id)
    router.push(`job-details/${item?.job_id}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size='small' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={() => handleCardPress(item)}
                />
              )}
              keyExtractor={(item) => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium, padding: SIZES.small }}
              horizontal
              showsHorizontalScrollIndicator={true}
            />
          )
        }
      </View>
    </View>
  )
}
export default PopularJobs