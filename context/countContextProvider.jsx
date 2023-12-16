import { useState  , useEffect} from "react";
import { countContext } from "./countContext";
import { Accelerometer } from "expo-sensors";

export default function CountContextProvider({children}){
    const [stepCount, setStepCount] = useState(0);
    const [prevValue, setPrevValue] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const [totalDistance, setTotalDistance] = useState(0);
  const threshold = 0.7; // Adjusted threshold, experiment with this value
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
    <countContext.Provider value={{stepCount , setStepCount}}>
        {children}
    </countContext.Provider>
  );

}