import {View, FlatList,StyleSheet} from 'react-native';

function MealList (){
function renderMealItem(itemData){
    const meals = {
      title: itemData.item.title,
      image: itemData.item.imageUrl,
      duration: itemData.item.duration,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity
    };
  
    return (<MealItem {...meals} onPress={pressHandler}/>);
}
function pressHandler(){
    navigation.navigate('mealDetail',{
      mealId: itemData.item.id
    })
}
    return(
    <View style={styles.container}>
    <FlatList keyExtractor={(item)=> item.id}
    data={displayMeal}
    renderItem={renderMealItem}/>
</View>)
}


export default MealList ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
})