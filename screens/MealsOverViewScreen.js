import { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'
export const MealsOverViewScreen = ({route, navigation}) => {
    const catId = route.params.categoryId
    const displayMeal = MEALS.filter((mealsItem)=>{
      return mealsItem.categoryIds.indexOf(catId) >= 0;
    })
      
    useLayoutEffect(()=>{
      const categoryTitle = CATEGORIES.find((category) =>
      category.id == catId).title;
      navigation.setOptions({
        title: categoryTitle
      })
    },[catId,navigation])
 
  return (
  <MealList item={displayMeal}/>
  )
  }


