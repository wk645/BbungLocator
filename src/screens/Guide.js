import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CustomHeader from '../components/CustomHeader';

function Guide() {
    return (
        <View style={styles.container}>
            {console.log('props in guide', this.props)}
            <CustomHeader isHome={false} />
            <Text style={styles.guideText}>Guide</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    guideText: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20
    }
});

export default Guide;