import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
import RestaurantItems, {localRestaurants} from "../components/home/RestaurantItems";
import Categories from "../components/home/Categories";
import Finder from "../components/home/Finder";
import HeaderTabs from "../components/home/HeaderTabs";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Fransisco");
  const [activeTab, setActiveTab] = useState("Delivery");
  const YELP_API =
    "gHdIv4qczHka49q5mU9gVhKl6g8Vq_jqg_qXryON98d85bkYDsbUTSjk8LwSMtzggEaFem6oDuRQUhOvMgyZixBI2VmQFOHfZ0NIueu8M89zEwHqkQnKOrLNyz61YXYx";

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city,activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Finder cityHandler={setCity}></Finder>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories></Categories>
        <RestaurantItems restaurantData={restaurantData}></RestaurantItems>
      </ScrollView>
<Divider width={5}></Divider>
<BottomTabs></BottomTabs>
    </SafeAreaView>
  );
}
