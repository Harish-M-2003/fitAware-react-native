import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ImageBackground } from "react-native";

export default function WorkoutRecommendation({ image, title, content }) {
  return (
    <ImageBackground
      source={{ uri: image }}
      style={{
        flex: 1,
        // padding: 20,
      }}
      imageStyle={{ borderRadius: 10 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding : 20,
          borderRadius : 10,
          paddingTop : "5%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 45,
            marginBottom: 20,
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "white", fontSize: 15 }}>{content}</Text>
      </View>
    </ImageBackground>
  );
}
