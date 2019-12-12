import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as firebase from 'firebase';

export default class SignUp extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: null
    };

    handleSignUp = () => {
        // redirect to Map after creating a new user
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((newUser) => {
            console.log('new user created', newUser.user);
            return newUser.user.updateProfile({
                displayName: this.state.name
            }).catch((err) => this.setState({ error: err.message }));
        });
    };

    render() {
        console.log('state in signup', this.state);
        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.container}>
                    <Text style={styles.greeting}>{`Hello!\nSign up to get started.`}</Text>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={styles.inputTitle}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize='none'
                                onChangeText={name => this.setState({ name })}
                                value={this.state.name}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 32 }}>
                            <Text style={styles.inputTitle}>Email Address</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize='none'
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 32 }}>
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                autoCapitalize='none'
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            ></TextInput>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={{ color: '#FFF', fontWeight: '500', fontSize: 15 }}>Sign up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{ color: '#414959', fontSize: 17 }}>
                            Have an account? <Text style={{ fontWeight: '500', color: '#fcbd3f' }}>Login</Text>
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
        justifyContent: 'center'
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D'
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#fcbd3f',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
