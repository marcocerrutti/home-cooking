;import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';


const Stack = createStackNavigator();

const FeedNavigator = () => (
    
    <Stack.Navigator mode="modal" screenOptions={{headerShown: false,gestureEnabled: true }}>
        <Stack.Screen name="Listings" component={ListingScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default FeedNavigator;