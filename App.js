import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Categories from './screens/Categories';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealsDetails from './screens/MealsDetails';

const Stack = createNativeStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    'commisioner':require('./assets/fonts/Commissioner-Regular.ttf'),
    'commisioner-bold':require('./assets/fonts/Commissioner-Bold.ttf')
  })

  if(!fontsLoaded)
    return;


  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'#351401',
          },
          headerTintColor:'white',
          contentStyle:{
            backgroundColor:'#3f2f35'
          }
        }}>
          <Stack.Screen 
            name='categories'
            component={Categories}
            // options={{
            //   title:'All Categories',
            // }}
            
          />
          <Stack.Screen
            name='mealsOverview'
            component={MealsOverview}
            //settings options dynamically for header bar
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title:catId
            //   }
            // }}  
          />
          <Stack.Screen
            name='mealsDetails'
            component={MealsDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
