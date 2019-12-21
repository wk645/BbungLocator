/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   StatusBar,
// } from 'react-native';
import {Icon} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import StoresList from './src/screens/StoresList';
import GoogleMap from './src/screens/GoogleMap';
import AddStore from './src/screens/AddStore';
import Guide from './src/screens/Guide';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import StoreCard from './src/screens/StoreCard';
import Loading from './src/screens/LoadingScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Store from './src/screens/Store';

const navOptionHandler = navigation => ({
  header: null,
});

const StoreStack = createStackNavigator({
  StoresList: {
    screen: StoresList,
    navigationOptions: navOptionHandler,
  },
  StoreCard: {screen: StoreCard},
  Store: {
    screen: Store,
    navigationOptions: navOptionHandler,
  },
});

const MapStack = createStackNavigator({
  GoogleMap: {
    screen: GoogleMap,
    navigationOptions: navOptionHandler,
  },
  AddStore: {
    screen: AddStore,
  },
});

const BottomTabNavigator = createBottomTabNavigator({
  Map: {
    screen: MapStack,
    navigationOptions: {
      tabBarLabel: '지도',
      tabBarIcon: ({tintColor}) => (
        <Icon
          style={{
            fontSize: 24,
            color: '#fcbd3f',
          }}
          type="Feather"
          name="map"
        />
      ),
      tabBarOptions,
    },
  },
  List: {
    screen: StoreStack,
    navigationOptions: {
      tabBarLabel: '리스트',
      tabBarIcon: ({tintColor}) => (
        <Icon
          style={{
            fontSize: 24,
            color: '#fcbd3f',
          }}
          type="Feather"
          name="list"
        />
      ),
    },
  },
  Guide: {
    screen: Guide,
    navigationOptions: {
      tabBarLabel: '가이드',
      tabBarIcon: ({tintColor}) => (
        <Icon
          style={{
            fontSize: 24,
            color: '#fcbd3f',
          }}
          type="Feather"
          name="info"
        />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: '프로필',
      tabBarIcon: ({tintColor}) => (
        <Icon
          style={{
            fontSize: 24,
            color: '#fcbd3f',
          }}
          type="Feather"
          name="user"
        />
      ),
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: '설정',
      tabBarIcon: ({tintColor}) => (
        <Icon
          style={{
            fontSize: 24,
            color: '#fcbd3f',
          }}
          type="Feather"
          name="settings"
        />
      ),
    },
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionHandler,
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: navOptionHandler,
  },
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen: Loading,
    Dashboard: {screen: BottomTabNavigator},
    Auth: AuthStack,
  },
  {
    initialRouteName: 'LoadingScreen',
  },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

const tabBarOptions = {
  style: {
    padding: 5,
  },
  labelStyle: {
    color: '#fcbd3f',
  },
};

// const MainTabs = createBottomTabNavigator({
//   Map: {
//     screen: GoogleMap,
//     navigationOptions: {
//       tabBarLabel: '지도',
//       tabBarIcon: ({tintColor}) => (
//         <Icon
//           style={{fontSize: 24, color: '#fcbd3f'}}
//           type="Feather"
//           name="map"
//         />
//       ),
//       tabBarOptions,
//     },
//   },
//   List: {
//     screen: StoresList,
//     navigationOptions: {
//       tabBarLabel: '리스트',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon
//           style={{fontSize: 24, color: '#fcbd3f'}}
//           type="Feather"
//           name="list"
//         />
//       ),
//     },
//   },
//   Guide: {
//     screen: Guide,
//     navigationOptions: {
//       tabBarLabel: '가이드',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon
//           style={{fontSize: 24, color: '#fcbd3f'}}
//           type="Feather"
//           name="info"
//         />
//       ),
//     },
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: '프로필',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon
//           style={{fontSize: 24, color: '#fcbd3f'}}
//           type="Feather"
//           name="user"
//         />
//       ),
//     },
//   },
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       tabBarLabel: '설정',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon
//           style={{fontSize: 24, color: '#fcbd3f'}}
//           type="Feather"
//           name="settings"
//         />
//       ),
//     },
//   },
// });

// const AuthStack = createStackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: navOptionHandler,
//   },
//   SignUp: {
//     screen: SignUp,
//     navigationOptions: navOptionHandler,
//   },
// });

// const StoreStack = createStackNavigator({
//   Store: {
//     screen: Store,
//     navigationOptions: navOptionHandler,
//   },
// });

// const AddStoreStack = createStackNavigator({
//   AddStore: {
//     screen: AddStore,
//     navigationOptions: navOptionHandler,
//   },
// });

// const StoreCardStack = createStackNavigator({
//   StoreCard: {
//     screen: StoreCard,
//     navigationOptions: navOptionHandler,
//   },
// });

// const MainStack = createStackNavigator(
//   {
//     Home: {
//       screen: MainTabs,
//       navigationOptions: navOptionHandler,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

// const app = createSwitchNavigator(
//   {
//     loading: LoadingScreen,
//     app: MainStack,
//     store: StoreStack,
//     addStore: AddStoreStack,
//     storeCard: StoreCardStack,
//     auth: AuthStack,
//   },
//   {
//     initialRouteName: 'loading',
//   },
// );

// export default class App extends React.Component {
//   render() {
//     const AppNavigator = createAppContainer();
//     return <AppNavigator />;
//   }
// }
