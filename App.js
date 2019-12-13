import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Button, Text, Header, Left, Body, Right, Icon, Title } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import CustomHeader from './src/components/CustomHeader';
import StoresList from './src/screens/StoresList';
import GoogleMap from './src/screens/GoogleMap';
import AddStore from './src/screens/AddStore';
import Guide from './src/screens/Guide';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import StoreCard from './src/screens/StoreCard';
import LoadingScreen from './src/screens/LoadingScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Store from './src/screens/Store';

const navOptionHandler = (navigation) => ({
  header: null
});

// const MapStack = createStackNavigator({
//   Map: {
//     screen: GoogleMap,
//     navigationOptions: navOptionHandler
//   }
// });

// const ListStack = createStackNavigator({
//   StoresList: {
//     screen: StoresList,
//     navigationOptions: navOptionHandler
//   }
// });

const MainTabs = createBottomTabNavigator({
  Map: {
    screen: GoogleMap,
    navigationOptions: {
        tabBarLabel: '지도',
        tabBarIcon: ({ tintColor }) => (
          <Icon size={25} type='Feather' name='map' />
        )
    }
  },
  List: {
    screen: StoresList,
    navigationOptions: {
      tabBarLabel: '리스트',
      tabBarIcon: ({ tintColor }) => (
        <Icon size={25} type='Feather' name='list' />
      )
    }
  },
  Guide: {
    screen: Guide,
    navigationOptions: {
      tabBarLabel: '가이드',
      tabBarIcon: ({ tintColor }) => (
        <Icon size={25} type='Feather' name='info' />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: '프로필',
      tabBarIcon: ({ tintColor }) => (
        <Icon size={25} type='Feather' name='user' />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: '설정',
      tabBarIcon: ({ tintColor }) => (
        <Icon size={25} type='Feather' name='settings' />
      )
    }
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionHandler
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: navOptionHandler
  }
});

const MainStack = createStackNavigator({
  Home: {
    screen: MainTabs,
    navigationOptions: navOptionHandler
  },
  AddStore: {
    screen: AddStore,
    navigationOptions: navOptionHandler
  },
  StoreCard: {
    screen: StoreCard,
    navigationOptions: navOptionHandler
  },
  Store: {
    screen: Store,
    navigationOptions: navOptionHandler
  }
},
{
  initialRouteName: 'Home'
});

const app = createSwitchNavigator(
  {
    loading: {
      screen: LoadingScreen,
      navigationOptions: navOptionHandler
    },
    app: MainStack,
    auth: AuthStack
  },
  {
    initialRouteName: 'loading'
  }
);

export default class App extends React.Component {
  render() {
    const AppNavigator = createAppContainer(app);
    return (
      <AppNavigator />
    )
  }
}

// export default createAppContainer(TabNavigator);