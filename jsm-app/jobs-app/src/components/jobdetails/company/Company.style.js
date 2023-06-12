import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.medium,
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: SIZES.large,
    backgroundColor: '#fff',
  },
  logoImage: {
    width: '80%',
    height: '80%',
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
    textAlign: 'center',
  },
  companyInfoBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.small / 2,
  },
  companyName: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
  },
  locationBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    marginLeft: 2,
  },
})
export default styles