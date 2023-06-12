import { View, Text } from 'react-native'

import styles from './Specifics.style'

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pointsContainer}>
        {
          points && points.map((item, i) => (
            <View key={item + i} style={styles.pointsWrapper}>
              <View style={styles.pointDot}></View>
              <Text style={styles.pointText}>{item}</Text>
            </View>
          ))
        }
      </View>
    </View>
  )
}
export default Specifics