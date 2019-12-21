import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as firebase from 'firebase';

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: null,
    language: 'korean',
    isLoggedIn: false,
  };

  handleLogin = () => {
    const {email, password} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('logged in?', this.state.isLoggedIn);
        // this.props.navigation.navigate('Map');
      })
      .catch(err => this.setState({error: err.message}));

    this.setState({isLoggedIn: true});
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <Text style={styles.greeting}>붕어빵 삼만리</Text>
          <View style={styles.error}>
            {this.state.error && (
              <Text style={styles.errorText}>{this.state.error}</Text>
            )}
          </View>
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Email Address</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
              />
            </View>

            <View>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={password => this.setState({password})}
                value={this.state.password}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={{color: '#FFF', fontWeight: '500', fontSize: 15}}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: 30}}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{color: '#414959', fontSize: 17}}>
              New to BbungTycoon?{' '}
              <Text style={{fontWeight: '500', color: '#fcbd3f'}}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  error: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
    marginTop: 20,
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#fcbd3f',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
