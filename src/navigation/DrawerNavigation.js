import React from "react"
import { createDrawerNavigator } from 'react-navigation'
import Main from "./MainStack";
import { AppIcon } from "../components";
import { ICONS } from "../common";
import { DEVICE_WIDTH } from "../config/device";
import Drawer from "../containers/DrawerScreens/index";

const DrawerNavigation = createDrawerNavigator({
Drawer:Main,

},{
   // drawerPosition : "left",
    drawerWidth : DEVICE_WIDTH * 0.75,
   contentComponent : Drawer,
    defaultNavigationOptions:()=>{
        return{
            drawerIcon : <AppIcon name={ICONS.menu} size={50} />
        }
   }
})
DrawerNavigation.navigationOptions = () => {
    return {
        header : null
    };
};
export default DrawerNavigation;