
import {
    Text,
    View , 
} from "react-native";
import MapView from "react-native-maps";
// import { Ionicons } from '@expo/vector-icons';

export default function Map({navigation}){

    return (
        <View style={{flex : 1 , position : "realative"}}>
                
            {/* <View style={{position : "absolute" , top : 0 , left : 0 , flex : 1}}>
<Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
            </View> */}
            <MapView width={"100%"} height={"100%"} mapType="hybrid">
                {/* <Text style={{color : "white"}}>akasldk</Text> */}
            </MapView>
        </View>

    )

}