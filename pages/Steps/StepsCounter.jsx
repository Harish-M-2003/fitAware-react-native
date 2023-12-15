import { View, Text, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Graph from "./Components/Graph";
import Counter from "./Components/Counter";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CircularBanner from "./Components/CircularBanner";

export default function StepsCounter() {
  // const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

  return (
    <View style={style.container}>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Counter />
      </View>
      <View style={{flex : 0.5 , justifyContent : "center" , alignItems : "center" , flexDirection : "row"}}>
        <CircularBanner
        unit={"kcal"}
        label={1000}
          icon={<FontAwesome5 name="fire" size={24} color="black" />}
        />
        <CircularBanner
        unit={"km"}
            label={1000}
          icon={<MaterialCommunityIcons name="map-marker-distance" size={24} color="black" />}
        />
        <CircularBanner
        unit={"h"}
        label={1000}  
          icon={<Ionicons name="time-outline" size={24} color="black" />}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Graph />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor : "white"
    // padding : 15,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
