import {View, Text, StyleSheet, FlatList} from 'react-native'
import { MealItem } from '../components/MealItem'
import { MEALS } from '../data/dummy-data'
export const MealsOverViewScreen = ({route}) => {
    const catId = route.params.categoryId
    const displayMeal = MEALS.filter((mealsItem)=>{
      return mealsItem.categoryIds.indexOf(catId) >= 0;
    })

    function renderMealItem(){
      const meals = {
        title: itemData.item.title,
        imageUrl: itemData.item.imageUrl
      };
      return (<MealItem title={meals.title}
      image={meals.imageUrl}
      />);
    }
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
