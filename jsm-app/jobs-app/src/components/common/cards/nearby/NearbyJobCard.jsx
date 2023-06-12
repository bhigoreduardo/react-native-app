import { TouchableOpacity, View, Image, Text } from 'react-native'

import { checkImageURL } from '../../../../utils'

import styles from './NearbyJobCard.style'

const NearbyJobCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item?.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={2}>{item?.job_title}</Text>
        <Text style={styles.jobType}>{item?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default NearbyJobCard