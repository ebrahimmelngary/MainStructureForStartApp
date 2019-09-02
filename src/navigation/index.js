import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Start from "./StartStack";
import DrawerNavigation from "./DrawerNavigation";


const SwitchNavigator = createSwitchNavigator({
  // StartStack:Start,
    MainScreen: DrawerNavigation,
    
    
});

const AppNavigation = createAppContainer(SwitchNavigator)
export default AppNavigation;