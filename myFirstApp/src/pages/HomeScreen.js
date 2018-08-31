import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';



export default class HomeScreen extends React.Component{
  render(){
      return(
          <View style={styles.container}>
            <Text>Aqui é a HomeScreen</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});