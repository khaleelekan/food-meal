
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverViewScreen } from './screens/MealsOverViewScreen';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Favorites } from './screens/Favorites';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// function DrawerNavigator (){
//   return (<Drawer.Navigator >
//     <Drawer.Screen name='all categories' 
//     component={CategoriesScreen} />
//     <Drawer.Screen name='favorites' component={Favorites}/>
//   </Drawer.Navigator>);
// }

export default function App() {
  return (
    <>
    <StatusBar style="light" /> 
    {/* <FavoritesContextProvider> */}
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401'},
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25'}
      }
      }>
        <Stack.Screen name='drawer'
         component={CategoriesScreen} options={{
          title: 'drawer'
         }}/>
        <Stack.Screen name='Overview'
         component={MealsOverViewScreen}
        //  options={({ route, navigation})=>{
        //   const catId = route.params.categoryId
        //   return {
        //     title: catId
        //   }
        //  }}
         />
         <Stack.Screen name='mealDetail' component={MealDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/* </FavoritesContextProvider> */}
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:60
  },
});
