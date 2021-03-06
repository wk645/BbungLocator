import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { db } from '../config';

import CustomHeader from '../components/CustomHeader';
import StoreCard from './Store';

let storesRef = db.ref('/stores');

class StoresList extends React.Component {
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
        console.log('props in storesList', this.props.navigation);
        return (
            <View style={styles.container}>
                <CustomHeader isHome={false} navigation={this.props.navigation} />
                {this.state.stores.length ? ( <StoreCard stores={this.state.stores} navigation={this.props.navigation} />) : ( <Text style={styles.emptyList}>No stores</Text>
                )}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default StoresList;
