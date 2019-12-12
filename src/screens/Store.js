import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Store = (props)  => {
	const { name, price, address } = props.navigation.state.params.store;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>이름: {name}</Text>
            <Text style={styles.text}>가격: {price}</Text>
            <Text style={styles.text}>주소: {address}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title='안내하기'
                    color='black'
                    onPress={() => console.log('안내하기 Clicked!')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20

    },
    text: {
        marginTop: 20,
        marginBottom: 50,
        fontSize: 20
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '20%',
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#fcbd3f',
        height: 50,
        padding: 10
    },
    button: {
        alignSelf: 'center' 
    }
});

export default Store;
