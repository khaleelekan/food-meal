import { StyleSheet, View} from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'

export const Favorites = () => {
  const favmealcontxt = useContext(FavoritesContext)
  const favmeal = MEALS.filter(meal => favmealcontxt.ids.includes(meal.id))
  
  if (favmeal.length == 0){
    return(<View style={styles.root}>
      <Text style={styles.Text}> you have no favorite meals yet</Text>
      </View>) 
  }
  
  return (
   <MealList item={favmeal}/>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    Text:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})