import {View, Text, StyleSheet,Image,ScrollView,} from 'react-native'
import { MEALS } from '../data/dummy-data'
import { MealDetails } from '../components/MealDetails'
import { Subtitle } from '../components/MealDetail/Subtitle'
import { List } from '../components/MealDetail/List'
import { useLayoutEffect } from 'react'
import { Button } from '../components/Button'




export const MealDetailsScreen = ({route, navigation}) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)
    
    function pressHandler(){
      console.log('you pressed the button')
    }
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight: ()=>{
          return <Button color='yellow' icon='star' onPress={pressHandler}/>
        }
      })
    })
   
  return (
    <ScrollView style={styles.scrollContainer}> 
      <Image source={{ uri: selectedMeal.imageUrl}}
      style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}/>
        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
        <Subtitle>INGREDIENTS</Subtitle>
        <List selectedMeal={selectedMeal.ingredients}/>
        <Subtitle>STEPS</Subtitle>
       <List selectedMeal={selectedMeal.steps}/>
        </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    marginBottom: 40
  },
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
  listOuterContainer:{
    alignItems: 'center'
  },
  listContainer:{
    maxWidth: '80%',
    alignContent: 'center'
  }
 
})
