import {View ,Text, StyleSheet,
    Image, Pressable, Platform} from 'react-native'
import { MealDetails } from './MealDetails'

export const MealItem = ({title,image,duration,complexity,affordability,onPress}) => {
  return (
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color:'#ccc'}}
        style={({pressed}) => pressed? styles.buttonPressed: null}
        onPress={onPress}>
            <View style={styles.imageConatiner}>
            <Image source={{ uri:image }} 
            style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails duration={duration} complexity={complexity}
            affordability={affordability}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height:2},
        shadowRadius: 8,
        shadowOpacity: 0.25,
        overflow:Platform.OS === 'android'? 'hidden' : 'visible'

    },
    imageConatiner:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',

        height: 200
    },
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8
    },

    buttonPressed:{
        opacity: 0.35
    }
})
