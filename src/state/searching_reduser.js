const FOLLOWING = 'FOLLOWING',
UNFOLLOWING = 'UNFOLLOWING',
LOADUSERS = 'LOADUSERS'

let initialState = {
  users: [] 
}

let searchingReduser = (state = initialState, action) => {
  let newState = {...state};
  newState.users = [...state.users]
  switch (action.type) {
    case FOLLOWING:
      newState.users.map(e => {
        if (e.id === action.id) {e.follow = true} 
      })
      break;
  
    case UNFOLLOWING:
      newState.users.map(e => {
        if (e.id === action.id){ e.follow = false} 
      })
      break;

    case LOADUSERS:
      newState.users = action.users;
      console.log(action)
      break;
  } 
    return newState;
}


export default searchingReduser;
export let followingActionCreator = (userId) => {
  return {
      type : FOLLOWING, id: userId
  }
};

export let unfollowingChangeActionCreator = (userId) => {
  return {
      type: UNFOLLOWING, id: userId
  }
}

export let loadUsersActionCreator = (users) => {
  return {
      type: LOADUSERS, users: users
  }
}
