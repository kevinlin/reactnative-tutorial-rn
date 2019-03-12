import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import ButtonBasics from "../screens/ButtonBasics";

import HomeScreen from '../screens/HomeScreen';
import IScrolledDownAndWhatHappenedNextShockedMe from "../screens/IScrolledDownAndWhatHappenedNextShockedMe";
import LinksScreen from '../screens/LinksScreen';

const HomeStack = createStackNavigator({ Home: HomeScreen });
HomeStack.navigationOptions = {
    tabBarLabel: 'Home'
};

const ButtonStack = createStackNavigator({ Home: ButtonBasics });
ButtonStack.navigationOptions = {
    tabBarLabel: 'Buttons'
};

const ScrollStack = createStackNavigator({ Links: IScrolledDownAndWhatHappenedNextShockedMe });
ScrollStack.navigationOptions = {
    tabBarLabel: 'Scroll'
};

const LinksStack = createStackNavigator({ Links: LinksScreen });
LinksStack.navigationOptions = {
    tabBarLabel: 'Links'
};

export default createBottomTabNavigator({
    HomeStack,
    ButtonStack,
    ScrollStack,
    LinksStack,
});
