import { FontAwesome5 } from "@expo/vector-icons";
import {
    View , 
    Text , 
} from "react-native";

export default function Weight({value}){
    return (
        <View
            style={{
              backgroundColor: "rgba(225,225,225,0.3)",
              flex: 1,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              padding : 10
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View style={{ backgroundColor: "white" , padding : 5 , borderRadius : 120 }}>
                <FontAwesome5 name="fire" size={24} color="#f64d41" />
              </View>
              <Text>Weight</Text>
            </View>
            
          <Text style={{ fontSize: 25 }}>{value}</Text>
          </View>
    )
}