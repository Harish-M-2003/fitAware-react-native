
import {
    View ,
    Text , 
} from "react-native";
import BottomNavigation from "../../AppComponent/BottomBar";

export default function Profile({navigation}){
    return (
        <View style={{flex : 1 , backgroundColor : "white"}}>
            {/* <Text>asjhbajdshb</Text> */}
            <View style={{flex : 1}}>
                <Text>profile page</Text>
            </View>
            <BottomNavigation navigation={navigation}/>
        </View>
    )
}