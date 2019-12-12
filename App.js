import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Button, Text, Header, Left, Body, Right, Icon, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import CustomHeader from './src/components/CustomHeader';
import StoresList from './src/screens/StoresList';
import GoogleMap from './src/screens/GoogleMap';

// class MapScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <CustomHeader isHome={true} navigation={this.props.navigation} />
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Map!</Text>
//             <Button light onPress={() => this.props.navigation.navigate('GoogleMap')}>
//           <Text>Go to Map!</Text>
//           </Button>
//         </View>
//       </View>
//     );
//   }
// }

// class ListScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <CustomHeader isHome={false} navigation={this.props.navigation} />
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>List!</Text>
//             <Button light onPress={() => this.props.navigation.navigate('StoresList')}>
//           <Text>Go to List!</Text>
//           </Button>
//         </View>
//       </View>
//     );
//   }
// }

const navOptionHandler = (navigation) => ({
  header: null
});

const MapStack = createStackNavigator({
  Map: {
    screen: GoogleMap,
    navigationOptions: navOptionHandler
  }
});

const ListStack = createStackNavigator({
  StoresList: {
    screen: StoresList,
    navigationOptions: navOptionHandler
  }
});

const TabNavigator = createBottomTabNavigator({
  // 지도, 리스트, 가이드, 프로필, 설정
  Map: MapStack,
  List: ListStack,
  // Guide: ,
  // Profile: ,
  // Settings: 
});

export default createAppContainer(TabNavigator);