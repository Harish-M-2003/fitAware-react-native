import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  
} from "react-native";

import RadioGroup from 'react-native-radio-buttons-group';

import * as NavigationBar from "expo-navigation-bar";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useMemo, useState } from "react";
// import { ,  } from "react-native-gesture-handler";
export default function Registered() {
  NavigationBar.setBackgroundColorAsync("black");

  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        // label: `Take a break, prioritize your well-being! Remember to stretch and
        // stay hydrated. 💻🌿`,
        // discriptionStyle : "white",
        // value: 'option1',
        color : "white",
    }
]), []);

const [selectedId, setSelectedId] = useState();

  const rules = [
    {
      id: 1,
      rule: "Prioritize safety by following proper form and guidelines during exercises.",
    },
    {
      id: 1,
      rule: "Respect fellow players, fostering a positive and supportive fitness community.",
    },
    {
      id: 1,
      rule: "Adhere to fair play principles and discourage cheating for a genuine gaming experience.",
    },
    {
      id: 1,
      rule: "Stay hydrated and be mindful of your physical limits while participating.",
    },
    {
      id: 1,
      rule: "Report any concerns about inappropriate content or behavior for a healthier gaming environment",
    },
  ];
  
  return (
    <ImageBackground
      source={{
        uri: "https://media.istockphoto.com/id/1360708169/photo/muscular-man-clapping-hands-and-preparing-for-workout.jpg?s=1024x1024&w=is&k=20&c=UQrBe240t917F8AGLGBEYVltl8ncH9jdYlgmwve4lVI=",
      }}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}>
        <View
          style={{
            flex: 1,
            paddingTop: "10%",
            paddingLeft: "5%",
            // backgroundColor : "green",
            height: "100vh",
            // height: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 40 }}>Register</Text>
          <View style={{ paddingTop: "20%" }}>
            {rules.map((value, index) => (
              <View style={{ margin: 10 }}>
                <Text key={index} style={{ color: "white", fontSize: 15 }}>
                  * {value.rule}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: 30,
          }}
        >
          <TouchableOpacity style={styles.gender}>
            {/* <Foundation name="male-female" size={24} color="white" /> */}
            <FontAwesome name="female" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gender}>
            <Foundation name="male-female" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            // justifyContent: "",
            flexDirection : "row",
            paddingHorizontal: 20,
            paddingTop: 20,
            gap : 10,
            // backgroundColor : "green"
          }}
        >
            {/* <TextInput /> */}
            {/* <RadioGroup 
            color = {"white"}
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        /> */}
        <Text style={{color : "white"}}>Take a break, prioritize your well-being! Remember to stretch and
            stay hydrated. 💻🌿</Text>
          
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop : 25 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text>Registered</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gender: {
    borderWidth: 1,
    borderColor: "rgba(225,225,225,0.3)",
    padding: 40,
    borderRadius: 10,
  },
});
