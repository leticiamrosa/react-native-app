import { createStackNavigator } from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';

// export default PeoplePage;

export default createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Main: {
    screen: PeoplePage,
    navigationOptions: {
      title: 'Pessoas',
      headerStyle: {
        backgroundColor: '#c22dd5',
        borderBottomWidth: 1,
        borderBottomColor: '#333'
      },
      headerTitleStyle: {
        color: '#eee',
        fontSize: 24,
        alignSelf: 'center'
      }
    }
  }

  // ...MyOtherRoutes,
});