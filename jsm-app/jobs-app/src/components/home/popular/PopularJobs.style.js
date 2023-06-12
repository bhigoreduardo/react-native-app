import { StyleSheet } from 'react-native'

import { SIZES, FONT, COLORS } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  headerBtn: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
})
export default styles