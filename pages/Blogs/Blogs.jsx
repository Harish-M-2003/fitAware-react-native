import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import BlogCard from "./Components/BlogCard";
import CommentCard from "./Components/CommentCard";
import { ScrollView } from "react-native";
// import { useState } from "react";
import Reader from "../Reader/Reader";
// import { TouchableOpacity } from "react-native-gesture-handler";
import BottomNavigation from "../../AppComponent/BottomBar";
import * as NavigationBar from "expo-navigation-bar";
import TinderCard from "react-tinder-card";
import { useState } from "react";
// import { useEffect } from "react";
// import * as Speech from 'expo-speech';

export default function Blogs({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [currentComment, setCurrentComment] = useState(0);

  NavigationBar.setBackgroundColorAsync("black");

  let data = [
    {
      liked: false,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      accountName: "askdnasjdn",
      comment:
        "Maintaining good health involves adopting a balanced lifestyle that includes regular exercise, a nutritious diet, and adequate sleep",
    },
    {
      liked: false,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      accountName: "Shinchan",
      comment:
        `Maintaining good health involves adopting a balanced lifestyle that includes regular exercise, a nutritious diet, and adequate sleep
        Maintaining good health involves adopting a balanced lifestyle that includes regular exercise, a nutritious diet, and adequate sleep
        Maintaining good health involves adopting a balanced lifestyle that includes regular exercise, a nutritious diet, and adequate sleep
        Maintaining good health involves adopting a balanced lifestyle that includes regular exercise, a nutritious diet, and adequate sleep
        `,
    },
    {
      liked: false,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      accountName: "Harish",
      comment:
        " balanced lifestyle that includes regular exercise, a nutritious diet, and adequate sleep",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.container}>
          {/* <TouchableOpacity> */}
          <BlogCard
            navigation={navigation}
            blog={`
              A peaceful life is characterized by serenity in the heart and harmony in surroundings, where tranquility becomes a cherished companion in the journey of existence. In the embrace of simplicity and contentment, each moment unfolds like a gentle melody, creating a tapestry of calm and fulfillment
              A peaceful life is characterized by serenity in the heart and harmony in surroundings, where tranquility becomes a cherished companion in the journey of existence. In the embrace of simplicity and contentment, each moment unfolds like a gentle melody, creating a tapestry of calm and fulfillment
              A peaceful life is characterized by serenity in the heart and harmony in surroundings, where tranquility becomes a cherished companion in the journey of existence. In the embrace of simplicity and contentment, each moment unfolds like a gentle melody, creating a tapestry of calm and fulfillment
              A peaceful life is characterized by serenity in the heart and harmony in surroundings, where tranquility becomes a cherished companion in the journey of existence. In the embrace of simplicity and contentment, each moment unfolds like a gentle melody, creating a tapestry of calm and fulfillment
              `}
            image={
              "https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg"
            }
            like={100}
            title={"Wings Belongs on Planes not Racing Cars"}
            //               content={
            //                 `
            // `              }
          />
          {/* </TouchableOpacity> */}
          <View style={{ padding: 10, paddingLeft: 20, paddingTop: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}> Comments</Text>
          </View>
          <Modal
            visible={visible}
            transparent
            hardwareAccelerated
            animationType={"none"}
            onRequestClose={() => setVisible(!visible)}
          >
            <TouchableOpacity
            activeOpacity={0}
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                flex: 1,
                justifyContent: "flex-end",
              }}
              onPress={() => setVisible(!visible)}
            >
              <View
                style={{
                  paddingTop : 20,
                  padding: 25,
                  height: "50%",
                  backgroundColor: "white",
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  gap : 10,
                }}
              >
                <View style={{padding : 10 , flexDirection : "row" , alignItems : "center" , gap  : 15}}>
                  <Image
                    source={{ uri: data[currentComment].image }}
                    style={{ height: 50, width: 50, borderRadius: 60 }}
                  />
                  <Text style={{fontSize : 15 , fontWeight : "bold"}}>@{data[currentComment].accountName}</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 17 , color : "gray" }}>
                  {data[currentComment].comment}
                </Text>
                </ScrollView>
                
              </View>
            </TouchableOpacity>
          </Modal>
          {data.map((value, index) => {
            // setCurrentComment(index)

            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setCurrentComment(index);
                  setVisible(!visible);
                }}
              >
                <CommentCard
                  image={value.image}
                  comment={value.comment}
                  liked={value.liked}
                  accountName={value.accountName}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <BottomNavigation theme={false} navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
