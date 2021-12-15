import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import RestaurantDetail from './Screens/RestaurantDetail';
import Rootnavigation from './navigation';

export default function App() {
    return (
            <Rootnavigation/>
        );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});