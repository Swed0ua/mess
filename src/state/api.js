import axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
    'API-KEY': '5cb185a7-43d0-4f36-851f-818ca9604ad7'}
})


export const AuthAPI = {
    authMe(){
        return instance.get(`auth/me`)
    },
    login(login, password, rememberMe ){
        return instance.post(`auth/login`, {email: login, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
    captcha(){
        return instance.get(`security/get-captcha-url`)
    }
}

export const ProfileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
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