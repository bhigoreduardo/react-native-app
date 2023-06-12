import { StyleSheet } from 'react-native'

import { FONT, SIZES, COLORS } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.small,
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: '100%',
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
})
export default styles