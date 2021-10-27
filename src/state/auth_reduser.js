const USER_AUTH = 'USER_AUTH',
CAPTCHA_URL = 'CAPTCHA_URL',
INITIALIZATION = 'INITIALIZATION'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null,
  initialization: false
}

let authReduser = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH: {
      return {
        ...state,
        id: action.id,
        login: action.login,
        email: action.email,
        isAuth: action.bool
      }
    }
    case CAPTCHA_URL: {
      return {
        ...state,
        captcha: action.url
      }
    }

    case INITIALIZATION: {
      return {
        ...state,
        initialization: true
      }
    }
  }
  return state;
}


export default authReduser;
export let userAuth = (id, login, email) => {
  let bool = false
  if (id) bool = true
  return {
    type: USER_AUTH, id, login, email, bool
  }
}

export let getCaptchaURL = (url) => {
  return{
    type: CAPTCHA_URL, url
  }
}

export let finishInitialization = () => {
  return{
    type: INITIALIZATION
  }
}