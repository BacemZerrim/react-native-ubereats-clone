import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Categories() {
  const items = [
    {
      image: require("../../assets/assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/assets/images/soft-drink.png"),
      text: "Soft-Drinks",
    },
    {
      image: require("../../assets/assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/assets/images/fast-food.png"),
      text: "Fast foods",
    },

    {
        image: require("../../assets/assets/images/deals.png"),
        text: "Deals",
      },
      {
        image: require("../../assets/assets/images/coffee.png"),
        text: "Coffee & Tea",
      },
      {
        image: require("../../assets/assets/images/desserts.png"),
        text: "Desserts",
      },
  ];
  return (
      <View
      style={{
marginTop:5,
backgroundColor:"#fff",
paddingVertical:10,
paddingleft:20
      }}
      >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
{items.map((item,index)=> (
      <View style={{ alignItems:"center",marginRight:15,marginLeft:15 }}>
        <Image
          source={items[index].image}
          style={{
            width: 50,
            height: 40,
            resizeMode: "contain",
          }}
        />
        <Text>{items[index].text}</Text>
      </View>
))}
    </ScrollView>
    </View>
  );
}
