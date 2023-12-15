import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Counter = () => {
  const [stepCount, setStepCount] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const [totalDistance, setTotalDistance] = useState(0);
  const threshold = 1.2; // Adjusted threshold, experiment with this value
  const cooldownTime = 2000; // 2 seconds cooldown period
  const averageStepLength = 0.76; // Example average step length in meters

  useEffect(() => {
    let subscription;

    const processAccelerationData = ({ x, y, z }) => {
      const accelerationMagnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

      if (accelerationMagnitude > threshold && prevValue <= threshold && !cooldown) {
        setStepCount((prevCount) => prevCount + 1);
        setCooldown(true);

        // Estimate step length and update total distance
        const estimatedStepLength = totalDistance / stepCount || averageStepLength;
        setTotalDistance((prevDistance) => prevDistance + estimatedStepLength);

        // Reset cooldown after the specified time
        setTimeout(() => {
          setCooldown(false);
        }, cooldownTime);
      }

      setPrevValue(accelerationMagnitude);
    };

    const subscribeToAccelerometer = async () => {
      subscription = Accelerometer.addListener(processAccelerationData);
      await Accelerometer.setUpdateInterval(100); // Adjust interval as needed
    };

    subscribeToAccelerometer();

    return () => {
      subscription && subscription.remove();
    };
  }, [prevValue, cooldown, totalDistance, stepCount]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Step Count: {stepCount}</Text>
      <Text style={styles.text}>Total Distance: {totalDistance.toFixed(2)} meters</Text> */}
      <AnimatedCircularProgress
          size={250}
          width={15}
          fill={stepCount % 100}
          tintColor="#f64d41"
          backgroundColor="rgba(246, 77, 65, 0.5)"
        >
          {() => 
          <View style={{flex : 1 , justifyContent : "center" , alignItems : "center"}}>
                <Text style={{fontSize : 30}}>{stepCount}</Text>
                <Text style={{fontSize : 25 , color : "gray"}}>Steps</Text>
        </View>}
        </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Counter;
