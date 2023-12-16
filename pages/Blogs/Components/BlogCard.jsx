import { View, Text, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BlogCard({ title, like, image, content, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <ImageBackground
        style={{ flex: 1 }}
        imageStyle={{ borderBottomLeftRadius: 70, borderBottomRightRadius: 70 }}
        source={{ uri: image }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.65)",
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 70,
            padding: 20,
            gap: 10,
            paddingTop: "50%",
            justifyContent: "space-between",
            paddingBottom: 50,
            // height : 0,
          }}
        >
          <View>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
              {title}
            </Text>
            <Text style={{ color: "white" }}>{content}</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                margin: 5,
              }}
            >
              <AntDesign name="hearto" size={24} color="white" />
              <Text style={{ color: "white" }}>{like}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
