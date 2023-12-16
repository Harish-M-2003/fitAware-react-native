import { View, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
// import { ScrollView } from "react-native-gesture-handler";

export default function Reader({ route, navigation }) {
  const { content, image } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: image }}
          style={{ flex: 1, padding: "50%" }}
        >
          <Ionicons name="arrow-back-circle-sharp" size={24} color="white" />
        </ImageBackground>
        <View style={{ flex: 1 , padding : 10}}>
          <Text>{content}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
