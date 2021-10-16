const USER_AUTH = 'USER_AUTH'

let initialState = {
  id: null,
  login: null,
  mail: null
}

let authReduser = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH: {
      return {
        ...state,
        id: action.id,
        login: action.login,
        email: action.email
      }
    }
  }
  return state;
}


export default authReduser;
export let userAuth = (id, login, email) => {
  return {
    type: USER_AUTH, id, login, email
  }
}
