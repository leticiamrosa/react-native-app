import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  createStackNavigator
} from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/utils/capitalizeFirstLetter';
// import LoginScreen from './src/pages/LoginScreen';
// import HomeScreen from './src/pages/HomeScreen';

// export default PeoplePage;

export default createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Main: {
    screen: PeoplePage,
    navigationOptions: {
      title: 'Pessoas',
      headerStyle: {
        backgroundColor: '#009bef',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
      },
      headerTitleStyle: {
        color: '#eee',
        fontSize: 24,
        alignItems: 'center'
      }
    }
  },
  PeopleDetail: {
    screen: PeopleDetailPage,
    navigationOptions: ({navigation}) => {
      const peopleName = navigation.state.params.people.name.first
      return ({
        title: peopleName,
        headerStyle: {
          backgroundColor: '#009bef',
          borderBottomColor: '#eee',
          borderBottomWidth: 1
        },
        headerTintColor: '#eee'
      })
    },
  }


  // ...MyOtherRoutes,
});

// export default class App extends React.Component{
//   render(){
//       return(
//         <AppStackNavigator/>
//       );
//   }
// }

// const AppStackNavigator = createStackNavigator({
//  Login: LoginScreen,
//  Home: HomeScreen
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  }
});