const FOLLOWING = 'FOLLOWING',
UNFOLLOWING = 'UNFOLLOWING',
LOADUSERS = 'LOADUSERS',
CHANGE_PAGE = 'CHANGE_PAGE'

let initialState = {
  users: [],
  pageSize: 5,
  page: 5,
  pages: 0
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
      newState.pages = Math.ceil(action.totalCount / state.pageSize);
      break;
    
    case CHANGE_PAGE:
      newState.page = action.page;
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
