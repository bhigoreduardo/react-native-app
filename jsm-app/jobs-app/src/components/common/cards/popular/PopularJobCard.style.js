import { StyleSheet } from 'react-native'

import { SIZES, COLORS, SHADOWS, FONT } from '../../../../constants'

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    width: 300,
    padding: SIZES.xLarge,
    borderRadius: SIZES.medium,
    shadowColor: COLORS.white,
    ...SHADOWS.medium,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#fff',
  }),
  logoContainer: (selectedJob, item) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    backgroundColor: selectedJob === item.job_id ? '#fff' : COLORS.white,
  }),
  logoImage: {
    width: '70%',
    height: '70%',
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
  jobName: (selectedJob, item) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    color: '#B3AEC6',
  },
})
export default styles