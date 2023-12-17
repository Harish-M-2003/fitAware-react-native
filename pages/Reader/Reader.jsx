import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
// import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function Reader({ route, navigation }) {

  // const navn = useNavigation();
  // navigation.na

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      // Code to run when the user is leaving the page
      // console.log('Leaving the page');
      Speech.stop();
      // You can perform cleanup or any other necessary actions here
    });

    return () => {
      // Cleanup code, unsubscribe from the event
      unsubscribe();
    };
  }, [navigation]);

  const { content, image, title } = route.params;
  const speak = () => {
    // const thingToSay = '1';
    Speech.speak("titl , " +  title);
    Speech.speak(content);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 15 }}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            paddingBottom: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              Speech.stop();
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
          >
            {title}
          </Text>
          <View />
        </View>
        <ImageBackground
          source={{ uri: image }}
          imageStyle={{ borderRadius: 10 }}
          style={{ flex: 1, padding: "50%" , marginBottom : "5%" }}
        >
          <Ionicons name="arrow-back-circle-sharp" size={24} color="white" />
        </ImageBackground>
        <View
            style={{ alignItems: "flex-start", flexDirection: "row", gap: 20 }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 20,
                paddingHorizontal: 30,
                alignItems : "center",
                backgroundColor: "black", 
              }}
              onPress={speak}
            >
              <Text style={{ color: "white", fontWeight: "bold" , 
                }}>Play as Audio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 20,
                paddingHorizontal: 30,
                alignItems : "center",
                borderWidth : 1,
                borderColor : "black",
              }}
              onPress={()=> Speech.stop()}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>Stop Audio</Text>
            </TouchableOpacity>
          </View>
        <View style={{ flex: 1, padding: 10, gap: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>{title}</Text>
          
          <Text style={{ fontSize: 15 }}>{content}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
