import { View, Text, Image , TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function CommentCard({ image, comment, liked , accountName }) {

//  const [heart , setHeart] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "6%",
        alignItems : "center",
        borderBottomWidth : 1,
        borderColor : "rgba(0,0,0,0.02)" 
        // backgroundColor : "red"
      }}
    >
      <View style={{height : "100%" , padding : 5 }}>

      <Image source={{uri : image}} style={{height : 50 , width : 50 , borderRadius : 60}}/>
      </View>
      <View style={{flex : 1 , height : "100%" , padding : 5 }}>

      <Text numberOfLines={4} style={{fontSize : 15 , color : "gray"}}>{comment}</Text>
      </View>
      {/* {!liked ? (
        <AntDesign name="hearto" size={24} color="black"/>
      ) : (
        <AntDesign name="heart" size={24} color="black" />
      )} */}
    </View>
  );
}
