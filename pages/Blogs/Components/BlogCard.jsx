import { View, Text, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BlogCard({
  title,
  like,
  image,
  // content,
  navigation,
  blog,
}) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      imageStyle={{ borderBottomLeftRadius: 55, borderBottomRightRadius: 55 }}
      source={{ uri: image }}
    >
      {/* <TouchableOpacity
        onPress={() =>
          navigation.navigate("Reader", {
            image: image,
            content: blog,
            title: title,
          })
        }
      > */}
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.65)",
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
          padding: 20,
          gap: 10,
          paddingTop: "40%",
          justifyContent: "space-between",
          paddingBottom: 20,
          // height : 0,
        }}
      >
        <View style={{ gap: 30 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
            {title}
          </Text>
          <Text
            numberOfLines={7}
            style={{ color: "white", fontWeight: "bold" }}
          >
            {blog}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            padding: "2%",
            // alignItems: "center",
            justifyContent: "space-between",
            margin: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="hearto" size={24} color="white" />
            <Text style={{ color: "white" }}>{like}</Text>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 20,
              paddingHorizontal: 30,
            }}
            onPress={() =>
              navigation.navigate("Reader", {
                content: blog,
                title: title,
                image: image,
              })
            }
          >
            <Text style={{ color: "black" }}>Read</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>
      {/* </TouchableOpacity> */}
    </ImageBackground>
  );
}
