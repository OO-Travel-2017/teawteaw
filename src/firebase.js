import {initializeApp} from 'firebase'; 
import firebase from 'firebase' 

var isConnect = null; 

if(isConnect==null){ 
isConnect = firebase.initializeApp({ 
apiKey: "AIzaSyB4a_UPCTlPDVe6r2grNYKP_TQZbfe4DgA", 
authDomain: "fir-realtimeweb-4eb12.firebaseapp.com", 
databaseURL: "https://fir-realtimeweb-4eb12.firebaseio.com", 
projectId: "fir-realtimeweb-4eb12", 
storageBucket: "fir-realtimeweb-4eb12.appspot.com", 
messagingSenderId: "186732470338" 
}) 
} 

export const db = isConnect.database(); 
// export const addressRef = db.ref('Address'); 
// export const eventRef = db.ref('Event'); 
// export const userRef = db.ref('User');