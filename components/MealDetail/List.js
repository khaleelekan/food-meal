import {StyleSheet, Text,View} from 'react-native'

export const List = ({selectedMeal}) => {
  return (
    selectedMeal.map((item)=>{
        return <View style={styles.listItem}>
            <Text style={styles.itemText} key={item}>{item}</Text>
        </View>
    }
      )
  )
}

const styles = StyleSheet.create({
    listItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText:{
        color: '#351401',
        textAlign: 'center'
    }
})
