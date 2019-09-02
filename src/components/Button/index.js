import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { AppText } from '../AppText';

const Button = ({title, style,titleStyle,disabled ,...rest})=>{
    return(
        <TouchableOpacity disabled={disabled} style={[styles.container,style]} {...rest}  >
            <AppText style={[styles.titleStyle, titleStyle]} >{title}</AppText>
        </TouchableOpacity>
    );
}

export {Button};


const styles = StyleSheet.create({
    container:{
        height:40,
        width:"80%",
        alignItems:'center',
        justifyContent:'center',
    },
    titleStyle:{
        fontWeight:'bold',
        }
});