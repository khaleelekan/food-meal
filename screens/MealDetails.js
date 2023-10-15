import {View, Text} from 'react-native'

export const MealDetails = ({route}) => {
    const mealId = route.params.mealId
  return (
    <View> 
        <Text>MealDetails {mealId}</Text>
        </View>
  )
}
