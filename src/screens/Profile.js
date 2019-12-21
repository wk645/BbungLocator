import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

// import CustomHeader from '../components/CustomHeader';

export default class Profile extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    const user = firebase.auth().currentUser;
    if (user) this.setState({user});
  }

  render() {
    console.log('state in profile', this.state.user);
    const {user} = this.state;
    return (
      <View style={styles.container}>
        {/* <CustomHeader isHome={false} navigation={this.props.navigation} /> */}
        <Text style={styles.text}>PROFILE PAGE</Text>
        {user ? (
          <View style={styles.nameContainer}>
            <Text style={styles.name}> {user.displayName} </Text>
            <Text style={styles.name}>{user.email}</Text>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              style={{alignSelf: 'center', marginTop: 30}}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontWeight: '500', color: '#fcbd3f'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf: 'center', marginTop: 30}}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{fontWeight: '500', color: '#fcbd3f'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
  nameContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  name: {
    textAlign: 'left',
    marginLeft: 20,
    fontSize: 20,
  },
});
