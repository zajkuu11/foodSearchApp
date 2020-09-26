import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteKey: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
