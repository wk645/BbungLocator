import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import * as firebase from 'firebase';

import Language from '../services/Language.json';
// console.log('TESTING LANGUAGE', Language['korean'].login.title);

import CustomHeader from '../components/CustomHeader';

class Settings extends React.Component {
  state = {
    user: null,
    korean: true,
  };

  onPressLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Map'))
      .catch(err => console.log('ERROR SIGNING OUT', err.message));
  };

  handleLogout = () => {
    this.onPressLogout();
  };

  onPressDeactivate = () => {
    const user = firebase.auth().currentUser;

    user
      .delete()
      .then(() => {
        this.props.navigation.navigate('SignUp');
      })
      .catch(err => {
        console.log('error deleting account', err.message);
      });
  };

  handleDeactivate = () => {
    console.log('inside deactivate');

    Alert.alert(
      '계정을 탈퇴하시겠습니까?',
      '탈퇴 / 취소',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: '탈퇴', onPress: () => this.onPressDeactivate()},
      ],
      {cancelable: true},
    );
  };

  handleLanguageChange = () => {
    console.log('language change pressed');
    this.setState({korean: !this.state.korean});
  };

  componentDidMount() {
    const user = firebase.auth().currentUser;
    this.setState({user});
  }

  render() {
    console.log('user state in settings', this.state.user);
    console.log('navigation props in settings', this.props.navigation);
    const {korean} = this.state;
    // console.log('language state', korean);

    const language = korean ? 'korean' : 'english';

    return (
      <View style={styles.container}>
        {/* <CustomHeader isHome={false} navigation={this.props.navigation} /> */}
        <Text style={styles.title}>{Language[language].settings.title}</Text>

        <View style={styles.optionsContainer}>
          {this.state.user ? (
            <View>
              <Text style={styles.option} onPress={this.handleLogout}>
                {Language[language].settings.logout}
              </Text>
              <Text style={styles.option} onPress={this.handleDeactivate}>
                {Language[language].settings.deactivate}
              </Text>
            </View>
          ) : null}
          <View>
            <Text style={styles.option} onPress={this.handleLanguageChange}>
              {Language[language].settings.language}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 25,
  },
  optionsContainer: {
    alignItems: 'flex-start',
    marginTop: 30,
    marginLeft: 30,
  },
  option: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Settings;
