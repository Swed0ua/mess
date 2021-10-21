const ADD_POST = 'ADD-POST',
INPUT_POST_CHANGE = 'INPUT-POST-CHANGE',
LOAD_PROFILE = 'LOAD_PROFILE',
GET_STATUS = 'GET_STATUS',
UPDATE_STATUS = 'UPDATE_STATUS'

let initialState = {
  status: '',
  userid: 0,
  fullName: 'User',
  posts: [
    {author : 'User', text:"Hello world!"},
    {author : 'User', text:"How are your"},
    {author : 'User', text:"Hello world!"},
    {author : 'User', text:"Have a nice day, guys"}
  ],
  photos: {
    small: null,
    large: null
  },
  postInput: '',
}

export let homeReduser = (state = initialState, action) => {
  let newState = {...state}

  switch (action.type) {
    case ADD_POST:{
      if (state.postInput.trim() !== ''){
        newState.posts = [...state.posts]
        newState.posts.push(
         {author : 'User', text:state.postInput}
        )
      }
      newState.postInput = '';
      break
    }
    case INPUT_POST_CHANGE: {
      newState.postInput = action.text;
      break
    }
    case LOAD_PROFILE : {
      return {...state, ...action.userData}
    }
    case GET_STATUS : {
      return {...state,
         status: action.status}
    }
    case UPDATE_STATUS : {
      return {
        ...state
      }
    }
  }  
    
    return newState;
}

export default homeReduser;

export let addPostActionCreator = () => {
  return {
      type : ADD_POST
  }
};

export let inputPostChangeActionCreator = (text) => {
  return {
      type: INPUT_POST_CHANGE, text: text
  }
}

export let loadProfileActionCreator = (userData) => {
  return {
      type : LOAD_PROFILE, userData
  }
};
export let getStatusActionCreator = (status) => {
  return {
    type: GET_STATUS, status
  }
}

export let updateStatusActionCreator = (status) => {
  return {
    type: UPDATE_STATUS, status
  }
}
