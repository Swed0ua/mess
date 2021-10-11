const AUTH = 'AUTH'

let initialState = {
  auth: false
}

let headerReduser = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case AUTH:
      newState.auth = action.auth
      break;
  }
    return newState;
}


export let authActionCreator = (auth) => {
  return {
      type : AUTH, auth
  }
};


export default headerReduser;
