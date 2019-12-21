import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
// import { auth } from '../config';

import * as firebase from 'firebase';

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Map' : 'Login');
    });
  }

  render() {
    console.log('props in loading screen', this.props.navigation);
    return (
      <View style={styles.container}>
        <Text>Welcome to 뿡어빵 삼만리!</Text>
        <Text style={styles.loadText}>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadText: {
    marginBottom: 20,
    fontSize: 25,
  },
});
