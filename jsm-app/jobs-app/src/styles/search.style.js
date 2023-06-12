import { StyleSheet } from 'react-native'

import { FONT, SIZES, COLORS } from '../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  noOfSearchedJobs: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.primary,
    marginTop: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: SIZES.small,
  },
  paginationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: COLORS.tertiary,
  },
  paginationImage: {
    width: '60%',
    height: '60%',
    tintColor: COLORS.white,
  },
  paginationTextBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 2,
  },
  paginationText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
})
export default styles