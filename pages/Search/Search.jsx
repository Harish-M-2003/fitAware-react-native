import { TextInput } from "react-native";
// import { Image } from "react-native";
// import { View, Text } from "react-native";

import { View } from 'react-native';
import SearchCarousel from "./Components/Carousal";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Search() {
  return (
    <ScrollView style={{flex : 1 }}>
      <View style={{ flex: 1 , padding : 10 , gap : 30 , backgroundColor : "white"}}>
      <View style={{paddingVertical : "5%" , paddingHorizontal : "2%" }}>
        <Text style={{fontSize : 30 , fontWeight : "bold"}}>Search</Text>
      </View>
      <TextInput
        placeholder="Search by name.."
        style={{ backgroundColor: "rgba(225,225,225,0.5)" , padding : "2%" , borderRadius : 10 }}
      />
      <View style={{flex : 0.8}}>

      <SearchCarousel/>
      </View>
      <View style={{paddingHorizontal : "2%"}}>
        <Text style={{fontSize : 30 }}>Registered</Text>
      </View>
      <View style={{flex : 1}} >
        <SearchCarousel/>
      </View>
      
      <View style={{paddingHorizontal : "2%"}}>
        <Text style={{fontSize : 30 }}>New Arrival</Text>
      </View>
      <View style={{flex : 1}} >
        <SearchCarousel/>
      </View>
      </View>
    </ScrollView>
    
  );
}
