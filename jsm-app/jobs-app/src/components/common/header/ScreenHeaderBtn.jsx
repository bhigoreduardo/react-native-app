import { TouchableOpacity, Image } from 'react-native'

import styles from './ScreenHeaderBtn.style'

const ScreenHeaderBtn = ({ iconUrl, dimensions, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  )
}
export default ScreenHeaderBtn