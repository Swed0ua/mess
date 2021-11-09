const FOLLOWING = 'FOLLOWING',
UNFOLLOWING = 'UNFOLLOWING',
LOADUSERS = 'LOADUSERS',
CHANGE_PAGE = 'CHANGE_PAGE',
PRELOAD = 'PRELOAD'

let initialState = {
  users: [],
  pageSize: 5,
  page: 10,
  pages: 100,
  loading: false
}

let searchingReduser = (state = initialState, action) => {
  let newState = {...state};
  newState.users = [...state.users]
  switch (action.type) {
    case FOLLOWING:
      newState.users.map(e => {
        if (e.id === action.id){ e.followed = true} 
      })
      break;
  
    case UNFOLLOWING:
      newState.users.map(e => {
        if (e.id === action.id){ e.followed = false} 
      })
      break;

    case LOADUSERS:
      newState.users = action.users;
      newState.pages = action.totalCount;
      newState.loading = false
      break;
    
    case CHANGE_PAGE:
      newState.page = action.page;

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

export let loadUsersActionCreator = (users, totalCount) => {
  return {
      type: LOADUSERS, users, totalCount
  }
}

export let changePageActionCreator = (page) => {
  return {
      type: CHANGE_PAGE, page
  }
}

export let changePreloadActionCreator = (load) => {
  return {
      type: PRELOAD, load
  }
}
