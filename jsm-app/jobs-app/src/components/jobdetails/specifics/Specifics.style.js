import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    padding: SIZES.medium,
    backgroundColor: '#fff',
    borderRadius: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  pointsContainer: {
    marginVertical: SIZES.small,
  },
  pointsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: SIZES.small / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.gray2,
    marginTop: 6,
  },
  pointText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    marginLeft: SIZES.small,
  },
})
export default styles