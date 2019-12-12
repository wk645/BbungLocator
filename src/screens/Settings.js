import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as firebase from 'firebase';

import CustomHeader from '../components/CustomHeader';

class Settings extends React.Component {
    state = {
        user: null
    }

    onPressLogout = () => {
        firebase.auth().signOut()
            .then(() => this.props.navigation.navigate('Map'))
            .catch((err) => console.log('ERROR SIGNING OUT', err.message));
    }

    handleLogout = () => {
        this.onPressLogout();
    }

    onPressDeactivate = () => {
        const user = firebase.auth().currentUser;

        user.delete().then(() => {
            this.props.navigation.navigate('SignUp');
        }).catch((err) => {
            console.log('error deleting account', err.message);
        });
    }

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
            { text: '탈퇴', onPress: () => this.onPressDeactivate() },
        ],
            { cancelable: true },
        );
    }

    handleLanguageChange = () => {
    
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        this.setState({ user });
    }

    render() {
        console.log('user state in settings', this.state.user);
        return (
            <View style={styles.container}>
                <CustomHeader isHome={false} />
                <Text style={styles.title}>SETTINGS PAGE</Text>

                <View style={styles.optionsContainer}>
                    {
                        this.state.user ?
                        <View>
                            <Text style={styles.option} onPress={this.handleLogout}>로그아웃</Text>
                            <Text style={styles.option} onPress={this.handleDeactivate}>탈퇴</Text>
                        </View> :
                        null
                    }
                    <View>
                        <Text style={styles.option} onPress={this.handleLanguageChange}>언어</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 25,
    },
    optionsContainer: {
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 30
    },
    option: {
        marginTop: 20,
        fontSize: 20
    }
});

export default Settings;

