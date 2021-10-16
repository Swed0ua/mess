import { AuthProfileAPI, UserAPI } from "./api";
import { loadProfileActionCreator } from "./home_reduser";
import { followingActionCreator, loadUsersActionCreator, unfollowingChangeActionCreator } from "./searching_reduser";

export const getUsersThunk = (page) => {
    return (dispatch) => {
        UserAPI.getUsers(page).then((response) => {
            let users = response.data.items;
            //let totalCount = response.data.totalCount;
            dispatch(loadUsersActionCreator(users));
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
        if (!profileID) profileID = 22; 
        AuthProfileAPI.getProfile(profileID).then((response)=> {
            dispatch(loadProfileActionCreator(response.data))
        }).catch(e => {
            console.error(e)
        })
    }
}

export const authMeThunk = () => {
    return dispatch => { AuthProfileAPI.authMe()}
}

