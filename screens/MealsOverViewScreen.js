import {View, Text, StyleSheet} from 'react-native'

import { MEALS } from '../data/dummy-data'
export const MealsOverViewScreen = () => {
  return (
    <View style={styles.container}>
        <Text>MealsOverViewScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
