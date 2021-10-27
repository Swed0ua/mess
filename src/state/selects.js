export let getInitialization = (state) => {
    return state.auth_reduser.initialization;
} 

export let getAuth = (state) => {
    return state.auth_reduser.isAuth;
}

export let getAuthId = (state) => {
    return  state.auth_reduser.id
}

