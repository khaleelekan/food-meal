import { useLayoutEffect } from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import { MealItem } from '../components/MealItem'
import { CATEGORIES, MEALS } from '../data/dummy-data'
export const MealsOverViewScreen = ({route, navigation}) => {
    const catId = route.params.categoryId
    const displayMeal = MEALS.filter((mealsItem)=>{
      return mealsItem.categoryIds.indexOf(catId) >= 0;
    })

    function renderMealItem(itemData){
      const meals = {
        title: itemData.item.title,
        image: itemData.item.imageUrl,
        duration: itemData.item.duration,
        affordability: itemData.item.affordability,
        complexity: itemData.item.complexity
      };
      function pressHandler(){
        navigation.navigate('mealDetail',{
          mealId: itemData.item.id
        })
      }
      return (<MealItem {...meals} onPress={pressHandler}/>);
    }
    useLayoutEffect(()=>{
      const categoryTitle = CATEGORIES.find((category) =>
      category.id == catId).title;
      navigation.setOptions({
        title: categoryTitle
      })
    },[catId,navigation])
 
  return (
    <View style={styles.container}>
        <FlatList keyExtractor={(item)=> item.id}
        data={displayMeal}
        renderItem={renderMealItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
