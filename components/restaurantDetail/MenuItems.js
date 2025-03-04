import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";



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

export default function MenuItems({restaurantName, foods, hideCheckbox}) {
  
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
  dispatch({
    type:"ADD_TO_CART",
    payload:{
      ...item,
      restaurantName:restaurantName,
      checkboxValue: checkboxValue,
      },
  });

  const cartItems= useSelector(
    state=>state.cartReducer.selectedItems.items
    );
  
    const isFoodInCart=(food,cartItems)=>
      Boolean(cartItems.find((item)=>item.title===food.title));
    

   return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
      <View Key={index}>
    <View  style={styles.menuItemStyle}>
      {hideCheckbox ? (<></>) : (<BouncyCheckbox
        iconStyle={{borderColor:"lightgray",borderRadius:0}}
        fillColor="green"
        onPress={(checkboxValue)=>selectItem(food, checkboxValue)}
        isChecked={isFoodInCart(food,cartItems)}
        />
        )}
      <FoodInfo food={food}></FoodInfo>
      <FoodImage food={food}></FoodImage>
    </View>
    <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}}></Divider>
    </View>
    ))}
    </ScrollView>
    );
  }
const FoodInfo = (props) => (
  <View style={{ width: 200, justifyContent: "space-evenly" }}>
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
