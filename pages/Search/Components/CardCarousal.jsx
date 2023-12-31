// import { Dimensions } from "react-native";
import { Text } from "react-native";
import { View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Carousel from "react-native-reanimated-carousel";
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";

export default function CardCarousel({ data }) {
  const width = Dimensions.get("window").width;
  const [cardIndex , setCardIndex] = useState(0);
  
  return (
    <View style={{ borderRadius: 10, flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={false}
        data={data}
        // scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCardIndex(index)}
        renderItem={({ index }) => (
          <View style={{ paddingHorizontal: 5, flex: 1 }}>
            {/* <Image
              height={"98%"}
              width={"93%"}
              style={{borderRadius : 10 , margin : 5 }}
              source={{
                uri: "https://s3images.zee5.com/wp-content/uploads/2021/12/avatar-2-kate-winslet-wears-wings-underwater-for-her-sea-per_361y.jpg",
              }}
            /> */}
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "rgba(225,225,225,0.6)",
                borderRadius: 5,
                flex: 1,
                padding: 10,
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>{data[index].title}</Text>
              <Text numberOfLines={2}>{data[index].content}</Text>
              <View
                style={{
                  alignItems: "flex-end",
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems : "center",
                  paddingHorizontal: 5,
                }}
              >
                <Text>Price : {data[index].price}</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "black",
                    padding: 10,

                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "flex-end",
                    paddingHorizontal: 30,
                  }}

                  onPress={() => data[index].navigation.navigate("Registered")}

                >
                  <Text style={{ color: "white" }}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={{alignItems : "center" , flexDirection : "row" , justifyContent : "center"}}>
        {
          
          data.slice(0 , data.length).map((i) => (
            
             (i != cardIndex)?<Entypo name="dot-single" size={24} color="rgba(0,0,0,0.2)" /> : <></>

            
        // </View>
          ))
        }
      </View>
    </View>
  );
}
