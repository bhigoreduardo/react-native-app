import { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import { useSearchParams, Stack, useRouter } from 'expo-router'

import useFetch from '../../src/hook/useFetch'
import { ScreenHeaderBtn, NearbyJobCard } from '../../src/components'
import { images, icons, COLORS, SIZES } from '../../src/constants'

import styles from '../../src/styles/search.style'

const Search = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [page, setPage] = useState(1)
  const { data, isLoading, error, refetch } = useFetch(
    'search',
    {
      query: params.id,
      page: page.toString(),
    },
  )

  const handlePagination = (direction) => {
    if (direction === 'left' && page > 1) setPage(page - 1)
    else if (direction === 'right') setPage(page + 1)

    refetch()
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimensions='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.avatar}
              dimensions='60%'
            />
          ),
          headerTitle: '',
        }}
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NearbyJobCard
            item={item}
            handleNavigate={() => router.push(`job-details/${item?.job_id}`)}
          />
        )}
        keyExtractor={(item) => item?.job_id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{params.id}</Text>
              <Text style={styles.noOfSearchedJobs}>Job oportunities</Text>
            </View>
            <View style={styles.container}>
              {
                isLoading ? (
                  <ActivityIndicator size='small' color={COLORS.primary} />
                ) : error && (
                  <Text>Something went wrong</Text>
                )
              }
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => handlePagination('left')}
              style={styles.paginationButton}
            >
              <Image
                source={icons.chevronLeft}
                resizeMode='contain'
                style={styles.paginationImage}
              />
            </TouchableOpacity>

            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>

            <TouchableOpacity
              onPress={() => handlePagination('right')}
              style={styles.paginationButton}
            >
              <Image
                source={icons.chevronRight}
                resizeMode='contain'
                style={styles.paginationImage}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}
export default Search