import { View, Text, ImageBackground, StyleSheet } from "react-native";
import BlogCard from "./Components/BlogCard";
import CommentCard from "./Components/CommentCard";
import { ScrollView } from "react-native";

export default function Blogs({ navigation }) {

  let data = [
    {
      liked : false,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      comment : "asdkjaksdjnaksjndakjsdakjndkajs",
    },
    {
      liked : false,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      comment : "asdkjaksdjnaksjndakjsdakjndkajs",
    },
    {
      liked : false,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      comment : "asdkjaksdjnaksjndakjsdakjndkajs",
    },
    {
      liked : false,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      comment : "asdkjaksdjnaksjndakjsdakjndkajs",
    },
    {
      liked : false,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      comment : "asdkjaksdjnaksjndakjsdakjndkajs",
    },
    {
      liked : false,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      comment : "asdkjaksdjnaksjndakjsdakjndkajs",
    },
    {
      liked : false,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      comment : "asdkjaksdjnaksjndakjsdakjndkajs",
    },
    {
      liked : false,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP7W-EOe7XZWpE_PGTSlwIGpT5qE9sOWJeQ&usqp=CAU",
      comment : "asdkjaksdjnaksjndakjsdakjndkajs",
    },
  ]

  return (
    <ScrollView style={{flex : 1 , backgroundColor : "white"}} showsVerticalScrollIndicator={false}>
      <View style={style.container}>
      <BlogCard
        navigation={navigation}
        image={
          "https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg"
        }
        like={100}
        title={"Wings Belongs on Planes not Racing Cars"}
        content={"A peaceful life is characterized by serenity in the heart and harmony in surroundings, where tranquility becomes a cherished companion in the journey of existence. In the embrace of simplicity and contentment, each moment unfolds like a gentle melody, creating a tapestry of calm and fulfillment."}
      />
      {
        data.map((value , index) => {

          return (
            <View key={index}>
              <CommentCard image={value.image} comment={value.comment} liked={value.liked}/>
            </View>
          )
        })
  }
    </View>
    </ScrollView>
    
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
