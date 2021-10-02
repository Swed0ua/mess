const FOLLOWING = 'FOLLOWING',
UNFOLLOWING = 'UNFOLLOWING'

let initialState = {
  users: [
    {id: 1, following: true, name: 'Andriy', location: {city: 'lviv', country: 'Ukraine'}, status: 'Hah i\'m admin' },
    {id: 2, following: false, name: 'Sergiy', location: {city: 'lviv', country: 'Ukraine'}, status: 'Hah i\'m not admin' },
    {id: 3, following: true, name: 'Bogdan', location: {city: 'lviv', country: 'Ukraine'}, status: 'Hah i\'m not admin, too' },
    {id: 4, following: false, name: 'Roman', location: {city: 'lviv', country: 'Ukraine'}, status: 'Hah i\'m RoMaN' }
  ] 
}

let searchingReduser = (state = initialState, action) => {
  let newState = {...state}
  switch (action.type) {
    case FOLLOWING:
      break;
  
    case UNFOLLOWING:
      break;
  } 
    return newState;
}


export default searchingReduser;
export let followingActionCreator = () => {
  return {
      type : FOLLOWING
  }
};

export let unfollowingChangeActionCreator = () => {
  return {
      type: UNFOLLOWING
  }
}
