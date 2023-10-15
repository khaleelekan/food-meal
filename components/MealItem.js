import {View ,Text, StyleSheet,
    Image, Pressable, Platform} from 'react-native'

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
            <View style={styles.detail}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View>
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
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPressed:{
        opacity: 0.35
    }
})
