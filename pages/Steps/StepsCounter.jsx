import { View, Text, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function StepsCounter() {
  return (
    <View style={style.container}>
      <AnimatedCircularProgress
        size={200}
        width={8}
        fill={100}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {() => <Text>{100}</Text>}
      </AnimatedCircularProgress>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
