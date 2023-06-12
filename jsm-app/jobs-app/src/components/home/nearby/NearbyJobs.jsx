import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import useFetch from '../../../hook/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { COLORS } from '../../../constants'

import styles from './NearbyJobs.style'

const NearbyJobs = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: 'React',
      num_pages: 1,
    }, ''
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>

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
            data && data.map((item) => (
              <NearbyJobCard
                key={item?.job_id}
                item={item}
                handleNavigate={() => router.push(`job-details/${item?.job_id}`)}
              />
            ))
          )
        }
      </View>
    </View>
  )
}
export default NearbyJobs