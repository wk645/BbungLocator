import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {db} from '../config';
let storesRef = db.ref('/stores');

class StoreCard extends React.Component {
  state = {
    stores: [],
  };

  componentDidMount() {
    storesRef.on('value', snapshot => {
      let data = snapshot.val();
      let stores = Object.values(data);
      this.setState({stores});
    });
  }

  render() {
    console.log('props in store card', this.props.navigation);
    return (
      <View style={styles.storesList}>
        <Text style={styles.header}>가게 리스트</Text>
        {this.state.stores.map((store, index) => {
          return (
            <View key={index} style={styles.storeCard}>
              <Text style={styles.storeText}>이름: {store.name}</Text>
              <Text style={styles.storeText}>가격: {store.price}</Text>
              <Text style={styles.storeText}>주소: {store.address}</Text>
              <Text style={styles.storeText}>상세정보: {store.details}</Text>
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.goButton}
                  title="상세"
                  onPress={() =>
                    this.props.navigation.navigate('Store', {
                      store: store,
                      //     navigation: this.props.navigation
                    })
                  }
                  //   onPress={() => this.props.navigation.navigate('Store')}
                />
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  storesList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 40,
    marginRight: 10,
    marginLeft: 10,
  },
  storeText: {
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'auto',
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 25,
  },
  storeCard: {
    marginBottom: 20,
    borderWidth: 1,
    height: 150,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    position: 'absolute',
    top: '30%',
    right: '1%',
    width: 55,
    height: 50,
    justifyContent: 'center',
    color: 'black',
  },
  goButton: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
  },
});

export default StoreCard;
