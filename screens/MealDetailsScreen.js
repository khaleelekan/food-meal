import {View, Text, StyleSheet,Image,ScrollView,} from 'react-native'
import { MEALS } from '../data/dummy-data'
import { MealDetails } from '../components/MealDetails'
import { Subtitle } from '../components/MealDetail/Subtitle'
import { List } from '../components/MealDetail/List'
import { useContext, useLayoutEffect } from 'react'
import { Button } from '../components/Button'
import { FavoritesContext } from '../store/context/favorites-context'




export const MealDetailsScreen = ({route, navigation}) => {
    const favoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)
    
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    function changeFavoriteStatus(){
      if(changeFavoriteStatus){
        favoriteMealsCtx.removeFavorites(mealId);
      }else{
        favoriteMealsCtx.addFavorites(mealId);
      }
    }
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight: ()=>{
          return <Button color='yellow'
           icon={mealIsFavorite ? 'star':'star-outline'} 
           onPress={changeFavoriteStatus}/>
        }
      })
    },[navigation, changeFavoriteStatus])
   
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
