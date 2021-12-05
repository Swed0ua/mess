import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, get, child } from "firebase/database";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
    'API-KEY': '5cb185a7-43d0-4f36-851f-818ca9604ad7'}
})

const firebaseConfig = {
    apiKey: "AIzaSyA6rQe4BqMsC5f6GCWAWd3uh4AMf5X1h3Q",
    authDomain: "social-network-f67f1.firebaseapp.com",
    projectId: "social-network-f67f1",
    storageBucket: "social-network-f67f1.appspot.com",
    messagingSenderId: "1078313813971",
    appId: "1:1078313813971:web:8fa60ec6701f4d78e3d126",
    measurementId: "G-36RXJBWY7X",
    databaseURL: "https://social-network-f67f1-default-rtdb.europe-west1.firebasedatabase.app/"
};

  const app = initializeApp(firebaseConfig);
  const database = ref(getDatabase(app));

export const AuthAPI = {
    authMe(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                onAuthStateChanged(getAuth(), (user) => {
                    resolve(user);
                });
           }, 3000);
         });
    },
    login(login, password, rememberMe ){
        //return instance.post(`auth/login`, {email: login, password, rememberMe})
        return signInWithEmailAndPassword(getAuth(), login, password)
    },
    logout(){
        return signOut(getAuth())
    },
    captcha(){
        return instance.get(`security/get-captcha-url`)
    },
    registration(login, password){
        return createUserWithEmailAndPassword(getAuth(), login, password)          
    }
}

export const ProfileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getProfilePosts(userId){
        return get(child(database, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
              return snapshot.val()
            } else {
              console.log("No data available");
            }
          })
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(text){
        return instance.put(`profile/status/`, {status: text})
    }
}

export const UserAPI = {
    getUsers(page){
        return instance.get(`users?page=${page}&count=5`)
    },
    followed(id){
        return instance.post(`follow/${id}`)
    },
    unfollowed(id){
        return instance.delete(`follow/${id}`)
    }
}

export const WeatherAPI = {
    getWeather(){
        return axios('https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=183b26c1e14b3facea2bc83da11c6f72')
    }
}