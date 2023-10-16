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
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}/>
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}> Ingredients </Text>
        </View>
         {selectedMeal.ingredients.map((ingredient)=>{
          return  <Text key={ingredient}>{ingredient}</Text>}
        )}
       <View style={styles.subtitleContainer}>
       <Text style={styles.subtitle}> Steps </Text>
       </View>
       {selectedMeal.steps.map((step)=>(<Text key={step}>{step}</Text>))}
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 350
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText:{
    color: 'white'
  },
  subtitle: {
    color:'#e2b497',
    fontSize: 18,
    fontWeight:'bold',
    textAlign: "center",
  },
  subtitleContainer:{
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  }
})
