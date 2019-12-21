import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import useForm from 'react-hook-form';
import {GoogleAutoComplete} from 'react-native-google-autocomplete';

// import Language from '../services/Language.json';
import LocationItem from '../components/LocationItem';
// import CustomHeader from '../components/CustomHeader';

import {db} from '../config';

export function AddStore({navigation}) {
  const [korean, setLanguage] = useState(true);
  const {register, setValue, handleSubmit, errors} = useForm();
  const [address, setAddress] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const _onPressCreate = data => {
    console.log('navigation in addStore', navigation);
    console.log('ddd', data);
    // create marker
    db.ref('/stores').push({
      name: data.storeName,
      price: data.storePrice,
      details: data.storeDetails,
      address,
      latitude,
      longitude,
    });

    navigation.navigate('Map');
  };

  const onSubmit = data => {
    Alert.alert(
      '새로운 가게를 등록하시겠습니까?',
      '등록 / 취소',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: '등록', onPress: () => _onPressCreate(data)},
      ],
      {cancelable: true},
    );
  };

  const onAddressChange = inputtedAddress => {
    console.log('fff', inputtedAddress.formatted_address);
    setAddress(inputtedAddress.formatted_address);
    setLatitude(inputtedAddress.geometry.location.lat);
    setLongitude(inputtedAddress.geometry.location.lng);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        {console.log('props in addStore', this.props)}
        <Text style={styles.addStoreText}>새로운 가게 등록</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.titles}>가게 이름</Text>
          <TextInput
            ref={register({name: 'storeName'}, {required: true})}
            style={styles.storeName}
            placeholder="예: 잉어킹"
            returnKeyType="next"
            keyboardType="default"
            onChangeText={text => setValue('storeName', text)}
          />
          <Text style={styles.titles}>가격</Text>
          <TextInput
            ref={register({name: 'storePrice'}, {required: true})}
            style={styles.storePrice}
            placeholder="예: 3개 1000원"
            returnKeyType="next"
            keyboardType="default"
            onChangeText={text => setValue('storePrice', text)}
          />
          <Text style={styles.titles}>상세정보</Text>
          <TextInput
            ref={register({name: 'storeDetails'}, {required: true})}
            style={styles.storePrice}
            placeholder="상세정보"
            returnKeyType="next"
            keyboardType="default"
            onChangeText={text => setValue('storeDetails', text)}
          />
          <Text style={styles.titles}>주소</Text>
          <GoogleAutoComplete
            apiKey="AIzaSyCKe3UT6SYSbU29gc6JYPmLELCar9IuveI"
            debounce={200}
            language="ko"
            minLength={3}>
            {({
              inputValue,
              handleTextChange,
              locationResults,
              fetchDetails,
            }) => (
              <React.Fragment>
                <View style={styles.typeContainer}>
                  <TextInput
                    style={{
                      fontSize: 25,
                      backgroundColor: '#fcbd3f'
                    }}
                    value={inputValue}
                    onChangeText={handleTextChange}
                    placeholder="주소 검색"
                  />
                </View>
                <FlatList
                  data={locationResults}
                  renderItem={({item}) => (
                    <LocationItem
                      fetchDetails={fetchDetails}
                      key={item.id}
                      {...item}
                      address={address}
                      onAddressChange={onAddressChange}
                    />
                  )}
                  keyExtractor={item => item.id}
                />
              </React.Fragment>
            )}
          </GoogleAutoComplete>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="등록하기"
            color="black"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
  },
  addStoreText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  storeName: {
    padding: 20,
    fontSize: 25,
    backgroundColor: '#fcbd3f',
    marginBottom: 20,
  },
  storePrice: {
    padding: 20,
    fontSize: 25,
    backgroundColor: '#fcbd3f',
    marginBottom: 20,
  },
  storeAddress: {
    padding: 20,
    fontSize: 25,
    backgroundColor: '#fcbd3f',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#fcbd3f',
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  titles: {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  typeContainer: {
    padding: 20,
    fontSize: 25,
    backgroundColor: '#fcbd3f',
    marginBottom: 20,
  },
});

export default AddStore;
