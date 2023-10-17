import {Text, StyleSheet} from 'react-native'

export const Favorites = () => {
  return (
    <Text style={styles.Text}> this is the favorite page</Text>
  )
}

const styles = StyleSheet.create({
    Text:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
})