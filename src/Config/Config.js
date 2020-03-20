import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBhwJOLajrsQfxDLOXSccBqVKI2v5AGsDQ",
  authDomain: "sample-arkana.firebaseapp.com",
  databaseURL: "https://sample-arkana.firebaseio.com",
  projectId: "sample-arkana",
  storageBucket: "sample-arkana.appspot.com",
  messagingSenderId: "40357577989",
  appId: "1:40357577989:web:0c08f53cac4057846f636c"
};

const appConfig = Firebase.initializeApp(firebaseConfig);
export const db = appConfig.database();
export const auth = Firebase.auth();