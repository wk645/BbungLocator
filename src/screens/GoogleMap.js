import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Button, StyleSheet, View } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { db } from '../config';

import CustomHeader from '../components/CustomHeader';
// import App from '../../App';
// import AddStore from './AddStore';
// import StoresList from './StoresList';
import StoresList from './StoresList';

let storesRef = db.ref('/stores');

class GoogleMap extends React.Component {
    state = {
        stores: []
    };

    componentDidMount() {
        storesRef.on('value', snapshot => {
            let data = snapshot.val();
            let stores = Object.values(data);
            this.setState({ stores });
        });
    }

    render() {
        // console.log('list of stores', this.state.stores);
        return (
            <View style={styles.container}>
            <CustomHeader isHome={true} navigation={this.props.navigation} />
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: 37.5665,
                    longitude: 126.9780,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                minZoomLevel={5}
            >
            {this.state.stores.map(store => (
                <Marker
                    key={store.address}
                    coordinate={{ latitude: store.latitude, longitude:store.longitude }}
                    title={store.name}
                    // image={}
                    // icon={}
                />)
            )}
            </MapView>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title='+'
                    onPress={() => this.props.navigation.navigate('AddStore')}
                />
            </View>
            <View style={styles.listButtonContainer}>
                <Button
                    style={styles.button}
                    title='List'
                    onPress={() => this.props.navigation.navigate('StoresList')}
                />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    buttonContainer: {
        position: 'absolute',
        top: '15%',
        right: '5%',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        fontWeight: 'bold'
    },
    listButtonContainer: {
        position: 'absolute',
        top: '23%',
        right: '5%',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        fontWeight: 'bold'
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: 'white'
    },
    container: {
        flex: 1
    }
});

// export default withNavigation(GoogleMap);
export default GoogleMap;

