import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
  }

   render() {
     return (
       <View style={styles.container}>
         <Text>Login Screen</Text>
       </View>
     );
   }
}
export default Login