import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Reader({ route, navigation }) {
  const { content, image } = route.params;

  return (
<View style={{flex : 1}}>
      <Image source={{ uri: image }} style={{ height: "50%" }} />
      {/* <Text>{typeof image}</Text> */}
      {/* <Image/ */}
      
      <Text style={{ backgroundColor: "white" , padding : 20}}>{content}</Text>
    </View>
  );
}
