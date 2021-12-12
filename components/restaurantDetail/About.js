import React from 'react'
import { View, Text, Image } from 'react-native'


const yelpRestaurantInfo = {
name:"name",
image:"image",
price:"price",
reviews:"review",
rating:"rating",
categories : [{title:"category1"},{title:"category2"}]
}



const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo

const formattedCategories = categories.map((cat) => cat.title).join(" • ");


const description = `${formattedCategories} ${ price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;




export default function About() {
    return (
        <View>
            <RestaurantImage image={image}></RestaurantImage>
            <RestaurantName name={name}></RestaurantName>
            <RestaurantDescription description={description}></RestaurantDescription>
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
  );

  const RestaurantName = (props) => (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );

  const RestaurantDescription = (props) => (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {props.description}
    </Text>
  );