import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Item title",
    description: "Item description",
    price: "Item price range",
    image:
      "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
  },  {
    title: "Item title",
    description: "Item description",
    price: "Item price range",
    image:
      "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
  },  {
    title: "Item title",
    description: "Item description",
    price: "Item price range",
    image:
      "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
  },  {
    title: "Item title",
    description: "Item description",
    price: "Item price range",
    image:
      "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
  },
];
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
      <View Key={index}>
    <View  style={styles.menuItemStyle}>
      <FoodInfo food={food}></FoodInfo>
      <FoodImage food={food}></FoodImage>
    </View>
    <Divider width={0.5} orientation="vertical"></Divider>
    </View>
    ))}
    </ScrollView>
    );
  }
const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
