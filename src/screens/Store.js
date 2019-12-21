import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import CustomHeader from '../components/CustomHeader';

const Store = props => {
  console.log('props in store', props.navigation.state);
  const {name, price, address, details} = props.navigation.state.params.store;
  return (
    <View style={styles.container}>
      <CustomHeader isHome={false} navigation={props.navigation} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>이름: {name}</Text>
        <Text style={styles.text}>가격: {price}</Text>
        <Text style={styles.text}>주소: {address}</Text>
        <Text style={styles.text}>상세정보: {details}</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="안내하기"
            color="black"
            onPress={() => console.log('안내하기 Clicked!')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft: 20,
  },
  infoContainer: {
    paddingLeft: 20,
  },
  text: {
    marginTop: 20,
    marginBottom: 50,
    fontSize: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '-30%',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#fcbd3f',
    height: 50,
    padding: 10,
  },
  button: {
    alignSelf: 'center',
  },
});

export default Store;
