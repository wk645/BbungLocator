import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Button, StyleSheet, View } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Geolocation from '@react-native-community/geolocation';
import * as firebase from 'firebase';

import { db } from '../config';

import CustomHeader from '../components/CustomHeader';
import StoresList from './StoresList';

let storesRef = db.ref('/stores');

class GoogleMap extends React.Component {
    state = {
        stores: [],
        initialRegion: null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('uuu', user);
            }
        });

        this.getCurrentLocation();
        storesRef.on('value', snapshot => {
            let data = snapshot.val();
            let stores = Object.values(data);
            this.setState({ stores });
        });
    }

    getCurrentLocation() {
        const position = Geolocation.getCurrentPosition(position => {
            if (position) {
                this.setState({
                    initialRegion: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }
                });
            } else {
                return null;
            }
        });
    }

    render() {
        console.log('state in map', this.state.navigation);
        return (
            <View style={styles.container}>
            <CustomHeader isHome={true} navigation={this.props.navigation} />
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={this.state.initialRegion}
                ref={ref => (this.mapView = ref)}
                zoomEnabled={true}
                showsUserLocation={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                minZoomLevel={5}
                maxZoomLevel={12}
            >
            {this.state.stores.map(store => (
                <Marker
                    key={store.address}
                    coordinate={{ latitude: store.latitude, longitude:store.longitude }}
                    title={store.name}
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

