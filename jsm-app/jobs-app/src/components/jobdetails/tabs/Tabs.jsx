import { View, FlatList, TouchableOpacity, Text } from 'react-native'

import { SIZES } from '../../../constants'

import styles from './Tabs.style'

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity
      onPress={onHandleSearchType}
      style={styles.btn(name, activeTab)}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  )
}

const Tabs = ({ tabs, activeTab, setAtiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setAtiveTab(item)}
          />
        )}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.small / 2, padding: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default Tabs