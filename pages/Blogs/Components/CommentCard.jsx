import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function CommentCard({ image, comment, liked }) {

 const [heart , setHeart] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "6%",
        alignItems : "center"
        // backgroundColor : "red"
      }}
    >
      <Image source={{uri : image}} style={{height : 50 , width : 50 , borderRadius : 60}}></Image>
      <Text style={{fontWeight : "bold" , fontSize : 15}}>{comment}</Text>
      {!liked ? (
        <AntDesign name="hearto" size={24} color="black"/>
      ) : (
        <AntDesign name="heart" size={24} color="black" />
      )}
    </View>
  );
}
