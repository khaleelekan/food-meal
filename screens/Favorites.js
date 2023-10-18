import { StyleSheet} from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'

export const Favorites = () => {
  const favmealcontxt = useContext(FavoritesContext)
  const favmeal = MEALS.filter(meal => favmealcontxt.ids.includes(meal.id))
  return (
   <MealList item={favmeal}/>
  )
}

const styles = StyleSheet.create({
    Text:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
})