import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
// import { SafeAreaView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StepsCounter from "./pages/Steps/StepsCounter";
import * as NavigationBar from "expo-navigation-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Performance from "./pages/Performance/Performance";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import Blogs from "./pages/Blogs/Blogs";
import { Ionicons } from '@expo/vector-icons';
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  const Tab = createBottomTabNavigator();
  NavigationBar.setBackgroundColorAsync("white");
  return (
    <GestureHandlerRootView style={{flex : 1}}>
      <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              backgroundColor: "#f64d41",
            },
          }}
        >
          {/* <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Steps" component={StepsCounter} /> */}
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown : false,
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              headerShown : false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Performance"
            component={Performance}
            options={{
              headerShown : false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="google-analytics"
                  size={24}
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Blogs"
            component={Blogs}
            options={{
              headerShown : false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="blogger" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown : false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
