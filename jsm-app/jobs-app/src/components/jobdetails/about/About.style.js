import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: '#fff',
  },
  headText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contentText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    marginVertical: SIZES.small / 1.25,
  },
})
export default styles