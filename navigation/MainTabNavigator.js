import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import ButtonBasics from "../screens/ButtonBasics";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from '../screens/HomeScreen';
import IScrolledDownAndWhatHappenedNextShockedMe from "../screens/IScrolledDownAndWhatHappenedNextShockedMe";
import LinksScreen from '../screens/LinksScreen';
import {ModalScreen} from "../screens/ModalScreen";
import Touchables from "../screens/Touchables";

const stackNavigatorConfig = {
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
};

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Buttons: ButtonBasics,
        Touchables: Touchables,
        Scrollables: IScrolledDownAndWhatHappenedNextShockedMe,
    },
    stackNavigatorConfig
);
HomeStack.navigationOptions = {
    tabBarLabel: 'Home'
};

const SettingsStack = createStackNavigator({ Links: LinksScreen });
SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings'
};

const RootStack = createStackNavigator(
    {
        Home: HomeStack,
        MyModal: ModalScreen,
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);
RootStack.navigationOptions = {
    tabBarLabel: 'Root'
};

export default createBottomTabNavigator({
    Root: RootStack,
    Settings: SettingsStack,
});
