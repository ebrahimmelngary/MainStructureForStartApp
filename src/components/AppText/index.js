import React from 'react';
import { Text, StyleSheet } from 'react-native';


const AppText = ({ children, style, onPress, ...rest }) => (
    <Text {...rest} style={[
        styles.text,
        style,
    ]} onPress={onPress} >{children}</Text>
);
export { AppText };


const styles = StyleSheet.create({
    text: {

    }
})