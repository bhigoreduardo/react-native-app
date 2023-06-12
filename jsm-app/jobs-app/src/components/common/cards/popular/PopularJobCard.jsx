import { TouchableOpacity, View, Image, Text } from 'react-native'

import { checkImageURL } from '../../../../utils'

import styles from './PopularJobCard.style'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={handleCardPress}
    >
      <View style={styles.logoContainer(selectedJob, item)}>
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

      <Text style={styles.companyName} numberOfLines={2}>
        {item?.employer_name}
      </Text>

      <View>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item?.job_title.substring(0, 10)}
        </Text>
        <Text style={styles.location}>{item?.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default PopularJobCard