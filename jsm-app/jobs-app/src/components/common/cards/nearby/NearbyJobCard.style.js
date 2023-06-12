import { StyleSheet} from 'react-native'

import { SIZES, SHADOWS, COLORS, FONT } from '../../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#fff',
    shadowColor: COLORS.white,
    ...SHADOWS.medium,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
  },
  logoImage: {
    width: '70%',
    height: '70%',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  jobType: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 2,
    textTransform: 'capitalize',
  }
})
export default styles