import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExerciseScreen from './Screens/ExerciseScreen'
import DieticianScreen from './Screens/DieticianScreen'
import MealScreen from './Screens/MealScreen';
import{createAppContainer} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <View style={styles.container}>
   <AppContainer/>
    </View>
  );
}

var bottomTabNavigator= createBottomTabNavigator({
  Exercise:{screen:ExerciseScreen},
  Dietician:{screen:DieticianScreen},
  Meal:{screen:MealScreen},
})

const AppContainer = createAppContainer(bottomTabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
