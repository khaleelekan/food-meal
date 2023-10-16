import {View, Text, StyleSheet,Image} from 'react-native'
import { MEALS } from '../data/dummy-data'
import { MealDetails } from '../components/MealDetails'

export const MealDetailsScreen = ({route}) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)
  return (
    <View> 
      <Image source={{ uri: selectedMeal.imageUrl}}
      style={styles.image}/>
        <Text>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}/>

        <Text> Ingredients </Text>
        {selectedMeal.ingredients.map((ingredient)=>{
          return  <Text key={ingredient}>{ingredient}</Text>}
        )}
        <Text> Steps </Text>
        {selectedMeal.steps.map((step)=>(<Text key={step}>{step}</Text>))}
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 200

  }
})
