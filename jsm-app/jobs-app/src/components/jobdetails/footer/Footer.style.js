import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.small,
    backgroundColor: '#fff',
  },
  likeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    borderColor: '#F37453',
  },
  likeBtnImage: {
    width: '40%',
    height: '40%',
    tintColor: '#F37453',
  },
  applyBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#FE7654',
    borderRadius: SIZES.medium,
    marginLeft: SIZES.medium,
  },
  applyBtnText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
})
export default styles