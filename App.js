import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverViewScreen } from './screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <>
    <StatusBar style="light" /> 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401'},
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25'}
      }
      }>
        <Stack.Screen name='meals'
         component={CategoriesScreen} options={{
          title: 'All categories'
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
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:60
  },
});
