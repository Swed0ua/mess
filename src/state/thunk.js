import { stopSubmit } from "redux-form";
import { AuthAPI, ProfileAPI, UserAPI } from "./api";
import { finishInitialization, getCaptchaURL, userAuth } from "./auth_reduser";
import { getStatusActionCreator, loadProfileActionCreator } from "./home_reduser";
import { followingActionCreator, loadUsersActionCreator, unfollowingChangeActionCreator } from "./searching_reduser";

export const getUsersThunk = (page) => {
    return (dispatch) => {
        UserAPI.getUsers(page).then((response) => {
            let users = response.data.items;
            let totalCount = response.data.totalCount;
            dispatch(loadUsersActionCreator(users, totalCount));
        }).catch((e) => {
            console.error(e)
        } )
    }
}

export const followingThunk = (userId) => {
    return dispatch => {UserAPI.followed(userId).then( response => {
        if(response.data.resultCode === 0) {
            dispatch(followingActionCreator(userId))

        } 
    })}
}

export const unfollowingThunk = (userId) => {
    return dispatch => {UserAPI.unfollowed(userId).then( response => {
        if(response.data.resultCode === 0) {
            dispatch(unfollowingChangeActionCreator(userId))
         }
    })}
}

export const getAuthProfileThunk = (profileID) => {
    return dispatch => {
        ProfileAPI.getProfile(profileID).then((response)=> {
            dispatch(loadProfileActionCreator(response.data))
        }).catch(e => {
            console.error(e)
        })
    }
}

export const getStatusThunk = (userId) => {
    return dispatch => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(getStatusActionCreator(response.data))
        }).catch( e => console.error(e))
    }
}

export const updateStatusThunk = (text) => {
    return dispatch => {
        ProfileAPI.updateStatus(text).then(response => {
            dispatch(getStatusActionCreator(text))
        }).catch(e => console.error(e))
    }
}

export const authMeThunk = () => (dispatch) => { 
        return AuthAPI.authMe().then(response => {
            let {id, login, email} = response.data.data;
            dispatch(userAuth(id, login, email));
        })
    }

export const loginThunk = (login, password, rememberMe = false) => dispatch => {
    AuthAPI.login(login, password, rememberMe).then(response => response.data).then(data=>{ console.log(data)
       if (data.resultCode === 0){dispatch(authMeThunk())}
       else { dispatch(stopSubmit('login', {_error: data.messages[0]})) }
       if (data.resultCode === 10){dispatch(getCaptchaThunk())}
    });
}

export const logoutThunk = () => dispatch => {
    AuthAPI.logout().then(response=>{ console.log(response)
       dispatch(authMeThunk());
    });
}

export const getCaptchaThunk = () => dispatch => {
    AuthAPI.captcha().then(response=>{ console.log(response)
        dispatch(getCaptchaURL(response.data.url))
    })
        .catch(e=>console.error(e));
}

export let initializationApp = () => dispatch => {
    let auth = dispatch(authMeThunk())
    Promise.all([auth]).then(()=>{
        dispatch(finishInitialization())  
    })
  }
  

