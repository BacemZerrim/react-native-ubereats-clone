import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
    {
      title: "Lasagna",
      description: "Item description",
      price: "$15.50",
      image:
        "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
    },  {
      title: "Tandoori chicken",
      description: "Item description",
      price: "$19.20",
      image:
        "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
    },  {
      title: "Chilaquilies",
      description: "Item description",
      price: "$19.20",
      image:
        "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
    },  {
      title: "Chicken ceaser",
      description: "Item description",
      price: "$10.00",
      image:
        "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
    },
  ];

export default function RestaurantDetail({route, navigation}) {
    return (
        <View>
            <About route={route}></About>
            <Divider width={1.8} style={{marginVertical:20}}></Divider>
            <MenuItems restaurantName={route.params.name} foods={foods}></MenuItems>
            <ViewCart navigation={navigation} />
        </View>
    )
}
