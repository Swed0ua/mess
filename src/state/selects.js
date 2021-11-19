import { createSelector } from "reselect";

const getState = (state) => state;

export let getInitialization = createSelector( 
    getState,
    (state)=>{return state.auth_reduser.initialization;}
)

export let getAuth = (state) => {
    return state.auth_reduser.isAuth;
}

export let getAuthId = (state) => {
    return  state.auth_reduser.id
}

export let getCaptcha = createSelector(
    getState,
    (state)=>{
        return state.auth_reduser.captcha
    }
)

export let getSearchingReduser = createSelector(
    getState,
    (state)=>{
        return state.searching_reduser
    }
)

export let getPopUpStatus = createSelector(
    getState,
    (state)=>{
        return state.auth_reduser.popUp
    }
)

