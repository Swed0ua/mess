const FOLLOWING = 'FOLLOWING',
UNFOLLOWING = 'UNFOLLOWING',
LOADUSERS = 'LOADUSERS',
PRELOAD = 'PRELOAD'

let initialState = {
  users: [],
  pageSize: 5,
  page: 5,
  pages: 0,
  loading: true
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
      newState.pages = action.totalCount;
      newState.page = action.page
      break;
    
    case PRELOAD:
      newState.loading = action.load;
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

export let loadUsersActionCreator = (page, users = initialState.users, totalCount = initialState.pages) => {
  return {
      type: LOADUSERS, users, totalCount, page
  }
}

export let changePreloadActionCreator = (load) => {
  return {
      type: PRELOAD, load
  }
}
