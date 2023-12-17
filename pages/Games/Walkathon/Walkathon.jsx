import { ScrollView, Touchable, TouchableWithoutFeedback } from "react-native";
import { View, Text } from "react-native";

import { LineChart, LineChartBicolor } from "react-native-gifted-charts";
import { MaterialIcons } from "@expo/vector-icons";

import MapView from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";
import Weight from "./Components/Weight";
import Calories from "./Components/Calories";
import { Pressable } from "react-native";
import Steps from "./Components/Steps";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Walkathon({ navigation }) {
  const lineData = [
    { value: 0, dataPointText: "0" },
    { value: 10, dataPointText: "10" },
    { value: 8, dataPointText: "8" },
    { value: 58, dataPointText: "58" },
    { value: 56, dataPointText: "56" },
    { value: 78, dataPointText: "78" },
    { value: 74, dataPointText: "74" },
    { value: 98, dataPointText: "98" },
  ];

  const lineData2 = [
    { value: 0, dataPointText: "0" },
    { value: 20, dataPointText: "20" },
    { value: 18, dataPointText: "18" },
    { value: 40, dataPointText: "40" },
    { value: 36, dataPointText: "36" },
    { value: 60, dataPointText: "60" },
    { value: 54, dataPointText: "54" },
    { value: 85, dataPointText: "85" },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}
    >
      <View
        style={{
          alignItems: "center",
          paddingBottom: "5%",
          padding: "5%",
          // backgroundColor : "red",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>

        <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Walkathon</Text>
        <View/>
        {/* <Text style={{ display : "none"}}>Walkathon</Text> */}
      </View>

      <Pressable
        onLongPress={() => navigation.navigate("Map")}
        style={{ marginTop: 10 }}
      >
        <MapView width={"100%"} height={400} mapType="hybrid" />
      </Pressable>
      <View
        style={{ flex: 1, paddingVertical: 10, gap: 5, flexDirection: "row" }}
      >
        <Steps value={100} />
        <View
          style={{
            // backgroundColor: "green",
            flex: 0.5,
            borderRadius: 5,
            gap: 5,
          }}
        >
          <Calories value={10} />
          <Weight value={10} />
        </View>
      </View>
      <View>
        <LineChart
          data={lineData}
          data2={lineData2}
          height={250}
          // showVerticalLines
          spacing={44}
          initialSpacing={0}
          color1="skyblue"
          color2="orange"
          // textColor1="green"
          dataPointsHeight={6}
          dataPointsWidth={6}
          dataPointsColor1="blue"
          dataPointsColor2="red"
          textShiftY={-2}
          textShiftX={-5}
          textFontSize={13}
        />
      </View>
    </ScrollView>
  );
}
