import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBQBJ8z7EGNm5LjRDTnhVT8adog5MaHz7w',
    authDomain: 'bbungtycoon-dc673.firebaseapp.com',
    databaseURL: 'https://bbungtycoon-dc673.firebaseio.com',
    projectId: 'bbungtycoon-dc673',
    storageBucket: 'bbungtycoon-dc673.appspot.com',
    messagingSenderId: '97525284985',
    appId: '1:97525284985:web:bcddb9e2621639771994a8',
    measurementId: 'G-2VCND18SNW'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
