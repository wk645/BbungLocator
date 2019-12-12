import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

class LocationItem extends PureComponent {
    _handlePress = async () => {
        const res = await this.props.fetchDetails(this.props.place_id);
        console.log('res.geometry.location.lat', res.geometry.location.lat);
        console.log('res.geometry.location.lng', res.geometry.location.lng);

        this.props.onAddressChange(res);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._handlePress} style={styles.root}>
                <Text style={styles.text}>{this.props.description}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        height: 60,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        marginLeft: 10
    }
});

export default LocationItem;
