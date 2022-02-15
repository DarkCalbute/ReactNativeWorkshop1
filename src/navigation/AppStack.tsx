import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GettingStarted1 from "../screens/GettingStarted1";
import GettingStarted2 from "../screens/GettingStarted2";
import GettingStarted3 from "../screens/GettingStarted3";
import GettingStarted4 from "../screens/GettingStarted4";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="GettingStarted1" component={GettingStarted1}/>
            <Stack.Screen name="GettingStarted2" component={GettingStarted2}/>
            <Stack.Screen name="GettingStarted3" component={GettingStarted3}/>
            <Stack.Screen name="GettingStarted4" component={GettingStarted4}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
};

export default AppStack;