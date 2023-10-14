import {FlatList} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { CategoryGridTile } from '../components/CategoryGridTile';


export const CategoriesScreen = ({navigation}) => {
  function renderCategoryItem (itemData){
    function pressHandler(){
      navigation.navigate('mealsOverView')
    }
      return <CategoryGridTile title={itemData.item.title}
      color={itemData.item.color} 
      onPress={pressHandler}/>
  };
  return (
   <FlatList data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem} 
    numColumns={2}/>
  )
}
