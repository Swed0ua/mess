import axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
    'API-KEY': '5cb185a7-43d0-4f36-851f-818ca9604ad7'}
})


export const getUsers = (page) => {
    return instance.get(`users?page=${page}&count=5`)
}

export const authMe = () => {
    return instance.get(`auth/me`)
}

export const followed = (id) => {
    return instance.post(`follow/${id}`)
}

export const unfollowed = (id) => {
    return instance.delete(`follow/${id}`)
}