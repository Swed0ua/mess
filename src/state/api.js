import axios from "axios";
import { useDispatch } from "react-redux";
import { userAuth } from "./auth_reduser";
import store from "./redux-store";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
    'API-KEY': '5cb185a7-43d0-4f36-851f-818ca9604ad7'}
})


export const AuthProfileAPI = {
    authMe(){
        return instance.get(`auth/me`).then(response => {
            let {id, login, email} = response.data.data;
            store.dispatch(userAuth(id, login, email));
        })
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
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