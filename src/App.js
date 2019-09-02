/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import language from '../src/language';

const App = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>{language.email}</Text>
    </View>
  );
};


export default App;
