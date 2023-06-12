import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  View,
  Text,
} from 'react-native'
import { useSearchParams, Stack, useRouter } from 'expo-router'
import { useCallback, useState } from 'react'

import useFetch from '../../src/hook/useFetch'
import {
  ScreenHeaderBtn,
  Company,
  JobTabs,
  JobAbout,
  JobSpecifics,
  JobFooter,
} from '../../src/components'
import { icons, images, COLORS, SIZES } from '../../src/constants'
import { tabs } from '../../src/utils'

const JobDetails = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [activeTab, setAtiveTab] = useState(tabs[0])
  const { data, isLoading, error, refetch } = useFetch(
    'job-details',
    {
      job_id: params.id,
    },
  )

  const onRefresh = useCallback(() => {
    refetch()
  }, [])

  const displayTabContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <JobAbout info={data[0]?.job_description ?? 'No data provider'} />
        )
      case 'Qualifications':
        return (
          <JobSpecifics
            title='Qualifications'
            points={data[0]?.job_highlights?.Qualifications ?? 'No data provider'}
          />
        )
      case 'Responsibilities':
        return (
          <JobSpecifics
            title='Responsibilities'
            points={data[0]?.job_highlights?.Responsibilities ?? 'No data provider'}
          />
        )
      default:
        return null
    }
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      >
        {
          isLoading ? (
            <ActivityIndicator size='small' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0]?.employer_logo}
                jobTitle={data[0]?.job_title}
                companyName={data[0]?.employer_name}
                location={data[0]?.job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setAtiveTab={setAtiveTab}
              />

              {displayTabContent()}
            </View>
          )
        }
      </ScrollView>

      <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'} />
    </SafeAreaView>
  )
}
export default JobDetails