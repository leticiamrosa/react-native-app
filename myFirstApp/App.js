import React from 'react';
import { StyleSheet, 
  Text, 
  View 
} from 'react-native';
import Header from './src/components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>   

        <View style={styles.content}>
          <Text style={styles.text}>Welcome to my app!</Text>
        </View>     
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374046'
  },
  text: {
    color: '#eee',
    fontWeight: '600'
  }
});
