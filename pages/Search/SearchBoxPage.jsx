import {
    View , 
    Text ,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function SearchBoxPage(){

    return (
        <View style={{backgroundColor : "white" , flex : 1}}>
            <View style={{paddingTop : "10%"}}>
                <TextInput style={{
                backgroundColor: "rgba(225,225,225,0.5)",
                padding: "3%",
                marginHorizontal: "2.5%",
                borderRadius: 10,
                color: "gray",
              }} placeholder="Search by event name ..."/>
            </View>
            {/* <Text>sakjs</Text> */}
        </View>
    )

}