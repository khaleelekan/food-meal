import {View ,Text, StyleSheet,Image, Pressable} from 'react-native'

export const MealItem = ({title,image}) => {
  return (
    <View>
        <Pressable>
            <View>
            <Image source={{ uri:image }} 
            style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title:{
        textAlign: 'center',

    }
})
