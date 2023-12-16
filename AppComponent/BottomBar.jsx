import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Vibration,
} from "react-native";

import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from '@expo/vector-icons';

// import * as Notifications from 'expo-notifications';
// import { Notification } from "expo-notifications";
// import * as Notifications from "expo-notifications";

export default function BottomNavigation({ theme, navigation }) {
  // Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: false,
  //       shouldSetBadge: false,
  //     }),
  //   });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialCommunityIcons
          name="home-variant-outline"
          size={24}
          color={theme ? "white" : "black"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Search")}
      >
        <Ionicons name="search-outline" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Performance")}
      >
        <MaterialCommunityIcons
          name="google-analytics"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Blogs")}>
        <FontAwesome5 name="blogger-b" size={24} color="black" />
        
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Profile")}
      >
        <MaterialCommunityIcons name="account" size={24} color="black" />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4%",
    paddingHorizontal: "10%",
    // borderRadius: 50,
    backgroundColor: "white",
  },
});
