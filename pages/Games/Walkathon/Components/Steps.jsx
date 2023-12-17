import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";
import { View } from "react-native";

export default function Steps({value}){

    return (
        <View
          style={{
            backgroundColor: "rgba(225,225,225,0.3)",
            flex: 0.5,
            borderRadius: 5,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View style={{ backgroundColor: "white" , borderRadius : 10 , padding : 5 }}>
              <FontAwesome5 name="fire" size={24} color="#f64d41" />
            </View>
            <Text style={{fontWeight : "bold"}}>Steps</Text>
          </View>
          <Text style={{ fontSize: 50 }}>{value}</Text>

          <View>
            <Text style={{ display: "none" }}>Steps</Text>
          </View>
        </View>
    )

}