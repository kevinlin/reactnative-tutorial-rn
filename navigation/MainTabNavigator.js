import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import ButtonBasics from "../screens/ButtonBasics";
import DetailsScreen from "../screens/DetailsScreen";

import HomeScreen from '../screens/HomeScreen';
import IScrolledDownAndWhatHappenedNextShockedMe from "../screens/IScrolledDownAndWhatHappenedNextShockedMe";
import LinksScreen from '../screens/LinksScreen';
import Touchables from "../screens/Touchables";

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Buttons: ButtonBasics,
        Touchables: Touchables,
        Scrollables: IScrolledDownAndWhatHappenedNextShockedMe,
    },
    {
        initialRouteName: "Home",
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);
HomeStack.navigationOptions = {
    tabBarLabel: 'Home'
};

const SettingsStack = createStackNavigator({ Links: LinksScreen });
SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings'
};

export default createBottomTabNavigator({
    HomeStack,
    LinksStack: SettingsStack,
});
