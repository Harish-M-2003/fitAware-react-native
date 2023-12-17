import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import WorkoutRecommendation from "./Components/WorkoutRecommendation";
import Graph from "../Steps/Components/Graph";
import HomeGraph from "./Components/HomeGraph";
import BottomNavigation from "../../AppComponent/BottomBar";
import { useState } from "react";
import Counter from "../Steps/Components/Counter";
// import { Barometer } from 'expo-sensors';
// import { useContext } from "react";
// import { countContext } from "../../context/countContext";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import

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
  // let stepCount = 0;

  const [accountName, setAccountName] = useState("name");
  // const [{ pressure, relativeAltitude }, setData] = useState({ pressure: 0, relativeAltitude: 0 });
  // const [subscription, setSubscription] = useState(null);

  // const toggleListener = () => {
  //   subscription ? unsubscribe() : subscribe();
  // };

  // const subscribe = () => {
  //   setSubscription(Barometer.addListener(setData));
  // };

  // const unsubscribe = () => {
  //   subscription && subscription.remove();
  //   setSubscription(null);
  // };
  // console.log(stepCount)

  // try{
  //    stepCount = AsyncStorage.getItem("stepCount")
  //   console.log(stepCount,"our stepcount")

  // }
  // catch(e)
  // {
  //   console.log(e)
  // }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        // style={{ flex: 1, backgroundColor: "white", position: "relative" }}
        showsVerticalScrollIndicator={false}
      >
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
              {/* <Text style={{ fontSize: 15 }}>{accountName}</Text> */}
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image
                  style={{ height: 40, width: 40, borderRadius: 50 }}
                  source={{
                    uri: "https://media.istockphoto.com/id/1360708169/photo/muscular-man-clapping-hands-and-preparing-for-workout.jpg?s=1024x1024&w=is&k=20&c=UQrBe240t917F8AGLGBEYVltl8ncH9jdYlgmwve4lVI=",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ gap: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ gap: 5 }}>
                <Text style={{ gap: 5, color: "gray" }}>
                  {date.getDate()} {getMonthName(date)} {date.getFullYear()}
                </Text>
                <Text style={{ gap: 5, fontSize: 25, fontWeight: "bold" }}>
                  Latest Activity
                </Text>
              </View>
            </View>
            {/* <View style={{ marginVertical: 40, marginTop: 10 }}>
              <Text
                style={{ color: "#f64d41", fontSize: 35, fontWeight: "bold" }}
              >
                {stepCount}
              </Text>
              <Text style={{ color: "gray", paddingTop: 10 }}>MOVES /day</Text>
            </View> */}
            <View style={{ paddingTop: "5%" }}>
              <Counter />
            </View>

            <View style={{ gap: 5 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  History
                </Text>
              </View>
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

          {/* <View>
            <Graph />
          </View> */}
        </View>
      </ScrollView>
      <BottomNavigation theme={false} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: "5%",
  },
});
