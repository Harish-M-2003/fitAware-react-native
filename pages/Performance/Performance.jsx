import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Graph from "../Steps/Components/Graph";
import CircularBanner from "../Steps/Components/CircularBanner";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Performance({ navigation }) {
  let count = 457;
  let status = "Active";

  return (
    <View style={style.container}>
      <View style={{ alignItems: "center", paddingTop: "5%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Results</Text>
      </View>
      <View style={{ alignItems: "center", paddingVertical: 40 }}>
        <Text style={{ fontWeight: "bold", fontSize: 50 }}>{count}</Text>
        <Text style={{ color: "gray", marginTop: 10 }}>MOVES /daily</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "gray", fontSize: 20 }}>Your life is</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#f64d41",
            padding: 5,
            borderRadius: 10,
            margin: 10,
            paddingHorizontal : 20,
          }}
        >
          <Text style={{color : "white" , fontWeight : "bold"}}>{status}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex : 0.5 , justifyContent : "center" , alignItems : "center" , flexDirection : "row"}}>
        <CircularBanner
        unit={""}
        label={"All Results"}
          icon={<FontAwesome5 name="fire" size={24} color="black" />}
        />
        <CircularBanner
        unit={""}
            label={"Measure"}
          icon={<MaterialCommunityIcons name="map-marker-distance" size={24} color="black" />}
        />
        <CircularBanner
        unit={""}
        label={"Records"}  
          icon={<Ionicons name="time-outline" size={24} color="black" />}
        />
      </View>
      <View style={{flex : 0.6 }}>
        <Graph/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
