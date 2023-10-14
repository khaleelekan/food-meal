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
    <StatusBar style="dark" /> 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='meals'
         component={CategoriesScreen}/>
        <Stack.Screen name='Overview'
         component={MealsOverViewScreen}/>
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
