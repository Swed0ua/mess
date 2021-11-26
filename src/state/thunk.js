import { stopSubmit } from "redux-form";
import { AuthAPI, ProfileAPI, UserAPI } from "./api";
import { changePopUpStatus, finishInitialization, getCaptchaURL, userAuth } from "./auth_reduser";
import { getStatusActionCreator, loadProfileActionCreator } from "./home_reduser";
import { changePageActionCreator, changePreloadActionCreator, followingActionCreator, loadUsersActionCreator, unfollowingChangeActionCreator } from "./searching_reduser";

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

export const changeSearchPageThunk = (page) => (dispatch) =>{
        let changePreloader = dispatch(changePreloadActionCreator(true))
        let changePage = dispatch(changePageActionCreator(page))
        let usersShow = dispatch(getUsersThunk(page))
        Promise.all([changePreloader, changePage, usersShow]).then(()=>{ 
    })
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
        return AuthAPI.authMe().then((response) => {
            console.log(response)
            response != null && dispatch(userAuth("25", 'USER', '0'));
        })
    }

export const loginThunk = (login, password, rememberMe = false) => dispatch => {
    AuthAPI.login(login, password, rememberMe).then(data=>{ console.log(data)
      /*  if (data.resultCode === 0){dispatch(authMeThunk())}
       else { dispatch(stopSubmit('login', {_error: data.messages[0]})) }
       if (data.resultCode === 10){dispatch(getCaptchaThunk())} */
    }).catch(err=> console.log(err.code));
}

export const registrationThunk = (login, password) => dispatch => {
    AuthAPI.registration(login, password).then(data=>{ console.log(data)}).catch(err => console.log(err));
}

export const logoutThunk = () => dispatch => {
    AuthAPI.logout().then(()=>{ 
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
  
  export const onChangePopUpStatus = act => dispatch => {
    dispatch(changePopUpStatus(act));
}
