import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/login/Login';
// import { SafeAreaView } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StepsCounter from './pages/Steps/StepsCounter';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  NavigationBar.setBackgroundColorAsync("black");
  return (
    <SafeAreaView style={styles.container}>
{/* 
      <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Steps" component={Login} />
          <Tab.Screen name="Login1" component={StepsCounter} />
      </Tab.Navigator>
      </NavigationContainer> */}
      <Login></Login>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
