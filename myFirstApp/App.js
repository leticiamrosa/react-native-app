import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header'
import PeopleList from './src/components/PeopleList'
import axios from 'axios'



export default class App extends React.Component {

  constructor(props) {
    super(props);
    // We generally use this.state = here, but when we use in another place we need to use this.setState()
    this.state = {
      peoples: []
    };
  }

  // Here we cam call API
  componentDidMount() {
    axios.get('https://randomuser.me/api/?nat=br&results=10')
      .then(response => {
        const { results } = response.data
        this.setState({
          peoples: results
        });
      })
  }


  render() {
    return (
      <View style={styles.container}>
        <Header title={'Nome novo'} />
        <View style={styles.content}>
        <PeopleList peoples={ this.state.peoples }/>
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
