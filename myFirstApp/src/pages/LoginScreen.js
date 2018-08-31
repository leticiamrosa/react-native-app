import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';



export default class LoginScreen extends React.Component{
  render(){
      return(
          <View style={styles.container}>
            <Button title="Go To Home Screen" onPress={() => this.props.navigation.navigate('Home')}/>
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