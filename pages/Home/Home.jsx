import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import WorkoutRecommendation from "./Components/WorkoutRecommendation";
import Graph from "../Steps/Components/Graph";
import HomeGraph from "./Components/HomeGraph";

function getMonthName(date) {
  let month = "";

  switch (date.getMonth()) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
    case 2:
      month = "Mar";
    case 3:
      month = "Apr";
    case 4:
      month = "May";
    case 5:
      month = "Jun";
    case 6:
      month = "July";
    case 7:
      month = "Augst";
    case 8:
      month = "Sep";
    case 9:
      month = "Oct";
    case 10:
      month = "Nov";
    case 11:
      month = "Dec";
  }

  return month;
}

export default function Home({ navigation }) {
  let date = new Date();

  let steps = 600;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            paddingBottom: "10%",
            paddingLeft: "5%",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flex: 1,
              gap: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>Account name</Text>
            <Image
              style={{ height: 50, width: 50, borderRadius: 50 }}
              source={{
                uri: "https://media.istockphoto.com/id/1360708169/photo/muscular-man-clapping-hands-and-preparing-for-workout.jpg?s=1024x1024&w=is&k=20&c=UQrBe240t917F8AGLGBEYVltl8ncH9jdYlgmwve4lVI=",
              }}
            />
          </View>
        </View>
        <View style={{ gap: 15 }}>
          <View style={{flexDirection : "row"}}>
          <View style={{ gap: 5 }}>
              <Text style={{ gap: 5, color: "gray" }}>
                {date.getDate()} {getMonthName(date)} {date.getFullYear()}
              </Text>
              <Text style={{ gap: 5, fontSize: 25, fontWeight: "bold" }}>
                Latest Activity
              </Text>
            </View>
          </View>
            <View style={{ marginVertical: 40, marginTop: 10 }}>
              <Text
                style={{ color: "#f64d41", fontSize: 35, fontWeight: "bold" }}
              >
                {steps}
              </Text>
              <Text style={{ color: "gray", paddingTop: 10 }}>MOVES /day</Text>
            </View>
            

          <View style={{ gap: 5 }}>
            <HomeGraph />
          </View>
        </View>

        <WorkoutRecommendation
          image={
            "https://media.istockphoto.com/id/1360708169/photo/muscular-man-clapping-hands-and-preparing-for-workout.jpg?s=1024x1024&w=is&k=20&c=UQrBe240t917F8AGLGBEYVltl8ncH9jdYlgmwve4lVI="
          }
          title={"Today's Workouts"}
          content={
            "Discover the workouts of the day created for you by your coaches"
          }
        />

        <View>
          <Graph />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: "5%",
  },
});
