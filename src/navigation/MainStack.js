import React from 'react'
import { createStackNavigator } from "react-navigation";
import Home from "../containers/MainScreens/Home";

const Main = createStackNavigator({
    HomeScreen: Home,
 
});
Main.navigationOptions = () => {
    return ({
        header: null,
    });
};
export default Main;