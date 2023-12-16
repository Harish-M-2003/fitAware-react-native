
import {
    View,
    Text
} from "react-native";

export default function Reader({route , navigation}){

    const {title , content} = route.params;

    return (
        <View>
            <Text>reader</Text>
        </View>
    );
}