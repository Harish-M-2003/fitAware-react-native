import {
    Text,
    View,
} from "react-native";
import { LineChart } from "react-native-gifted-charts"

export default function Graph(){

    const latestData = [
        {
          value: 100,
        //   labelComponent: () => lcomp('22 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 120,
          hideDataPoint: true,
        },
        {
          value: 210,
          customDataPoint: dPoint,
        },
        {
          value: 250,
          hideDataPoint: true,
        },
        {
          value: 320,
        //   labelComponent: () => lcomp('24 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 310,
          hideDataPoint: true,
        },
        {
          value: 270,
          customDataPoint: dPoint,
        },
        {
          value: 240,
          hideDataPoint: true,
        },
        {
          value: 130,
        //   labelComponent: () => lcomp('26 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 120,
          hideDataPoint: true,
        },
        {
          value: 100,
          customDataPoint: dPoint,
        },
        {
          value: 210,
          hideDataPoint: true,
        },
        {
          value: 270,
        //   labelComponent: () => lcomp('28 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 240,
          hideDataPoint: true,
        },
        {
          value: 120,
          hideDataPoint: true,
        },
        {
          value: 100,
          customDataPoint: dPoint,
        },
        {
          value: 210,
          // labelComponent: () => lcomp('28 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 20,
          hideDataPoint: true,
        },
        {
          value: 100,
          customDataPoint: dPoint,
        },
      ];
      const dPoint = () => {
        return (
          <View
            style={{
              width: 14,
              height: 14,
              backgroundColor: 'white',
              borderWidth: 3,
              borderRadius: 7,
              borderColor: '#07BAD1',
            }}
          />
        );
      };

    return (
        <View style={{padding : 5 , gap : 15 , borderRadius : 5}}>
          <Text style={{fontSize : 20}}>History</Text>

          <View>
          <LineChart
        areaChart
        // hideDataPoints
        isAnimated
        animationDuration={1200}
        startFillColor="#f64d41"
        startOpacity={1}
        endOpacity={0.3}
        initialSpacing={0}
        data={latestData}
        // spacing={30}
        // thickness={5}
        // hideRules
        hideYAxisText
        yAxisColor="white"
        showVerticalLines
        verticalLinesColor="rgba(0,0,0,0.1)"
        xAxisColor="white"
        color="#f64d41"
        />
          </View>
            
        </View>
    );

}