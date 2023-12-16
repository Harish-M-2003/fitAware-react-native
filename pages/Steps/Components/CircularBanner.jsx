import {
    View , 
    Text , 
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";


export default function CircularBanner({unit , icon  , label }){

    return (
        <View
        style={{
          paddingHorizontal: 10,
          flex: 0.5,
          flexDirection: "row",
          //   backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
        }}
      >
        <View style={{flex : 1 , justifyContent : "center" , alignItems : "center"  ,gap : 10 , 
        backgroundColor : "rgba(225,225,225,0.25)" , padding : 10 , borderRadius : 100}}>
          <AnimatedCircularProgress
            size={90}
            width={5}
            fill={100}
            tintColor="#f64d41"
            backgroundColor="rgba(246, 77, 65, 0.5)"
          >
            {() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap : 5
                }}
              >
                {/* <Text style={{ fontSize: 10, color: "gray" }}>Steps</Text> */}
                {/* <FontAwesome5 name="fire" size={24} color="black" /> */}
                {icon}
                
          <Text style={{fontSize : 12 }}>{label} {unit}</Text>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
    );

}