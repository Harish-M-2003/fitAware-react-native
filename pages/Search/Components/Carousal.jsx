// import { Dimensions } from "react-native";
import { View , Image , Dimensions} from "react-native";

import Carousel from 'react-native-reanimated-carousel';

export default function SearchCarousel() {
    
const width = Dimensions.get('window').width;
  return (
    <View style={{borderRadius : 10  , flex : 1}}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View style={{paddingHorizontal : 5 , flex : 1}}>
            <Image
              height={"98%"}
              width={"93%"}
              style={{borderRadius : 10 , margin : 5 }}
              source={{
                uri: "https://s3images.zee5.com/wp-content/uploads/2021/12/avatar-2-kate-winslet-wears-wings-underwater-for-her-sea-per_361y.jpg",
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
