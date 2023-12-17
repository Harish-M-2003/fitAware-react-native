import { TextInput, TouchableOpacity } from "react-native";
// import { Image } from "react-native";
// import { View, Text } from "react-native";

import { View } from "react-native";
import SearchCarousel from "./Components/Carousal";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardCarousel from "./Components/CardCarousal";
import BottomNavigation from "../../AppComponent/BottomBar";

export default function Search({ navigation }) {
  let register_data = [
    {
      title: "Walkathon",
      price: 100,
      navigation: navigation,
      content:
        "Avatar, a cinematic masterpiece by James Cameron, immerses audiences in the breathtaking world of Pandora, where the Na'vi people and their connection to nature unfold a mesmerizing tale of love and environmental consciousness",
    },
    {
      title: "Walkathon",
      price: 100,
      navigation: navigation,
      content:
        "Avatar, a cinematic masterpiece by James Cameron, immerses audiences in the breathtaking world of Pandora, where the Na'vi people and their connection to nature unfold a mesmerizing tale of love and environmental consciousness",
    },
    {
      title: "Walkathon",
      price: 100,
      navigation: navigation,
      content:
        "Avatar, a cinematic masterpiece by James Cameron, immerses audiences in the breathtaking world of Pandora, where the Na'vi people and their connection to nature unfold a mesmerizing tale of love and environmental consciousness",
    },
    
  ];

  let new_arrival = [
    {
      title: "Treasure hunt 1",
      price: 100,
      navigation: navigation,
      content:
        "Avatar, a cinematic masterpiece by James Cameron, immerses audiences in the breathtaking world of Pandora, where the Na'vi people and their connection to nature unfold a mesmerizing tale of love and environmental consciousness",
    },
    {
      title: "Treasure hunt 2",
      price: 100,
      navigation: navigation,
      content:
        "Avatar, a cinematic masterpiece by James Cameron, immerses audiences in the breathtaking world of Pandora, where the Na'vi people and their connection to nature unfold a mesmerizing tale of love and environmental consciousness",
    },
  ];


  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{ flex: 1, padding: 10, gap: 30, backgroundColor: "white" }}
        >
          <View style={{ paddingVertical: "5%", paddingHorizontal: "2%" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Search</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SearchBoxPage")}
          >
            <Text
              style={{
                backgroundColor: "rgba(225,225,225,0.5)",
                padding: "4%",
                marginHorizontal: "2.5%",
                borderRadius: 10,
                color: "gray",
              }}
            >
              Search by name..
            </Text>
          </TouchableOpacity>
          <View style={{ flex: 0.8 }}>
            <SearchCarousel />
          </View>
          <View style={{ paddingHorizontal: "2%" }}>
            <Text style={{ fontSize: 30 }}>Registered</Text>
          </View>
          <View style={{ flex: 0.8 }}>
            <CardCarousel data={register_data} />
          </View>

          <View style={{ paddingHorizontal: "2%" }}>
            <Text style={{ fontSize: 30 }}>New Arrival</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.8 }}>
              <CardCarousel data={new_arrival} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View />
      <BottomNavigation theme={false} navigation={navigation} />
    </View>
  );
}
