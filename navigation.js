import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "./Screens/Home"
import RestaurantDetail from './Screens/RestaurantDetail';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store';
import OrderCompleted from './Screens/OrderCompleted';

const store  = configureStore();

export default function Rootnavigation() {
    const Stack=createStackNavigator();
    const screenOptions={
        headerShown: false,
    };
    return (
        <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
                <Stack.Screen name='OrderCompleted' component={OrderCompleted}/>
            </Stack.Navigator>
            
        </NavigationContainer>
        </ReduxProvider>
    );
}
