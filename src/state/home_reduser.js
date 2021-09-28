const ADD_POST = 'ADD-POST',
INPUT_POST_CHANGE = 'INPUT-POST-CHANGE'

let initialState = {
  posts: [
    {author : 'User', text:"Hello world!"},
    {author : 'User', text:"How are your"},
    {author : 'User', text:"Hello world!"},
    {author : 'User', text:"Have a nice day, guys"}
  ],
  postInput: ''
}

export let homeReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newState = {...state}
      if (state.postInput.trim() !== ''){
        newState.posts = {...state.posts}
        console.log(newState)
        state.posts.push(
         {author : 'User', text:state.postInput}
        )
      }
      state.postInput = '';
      break
    }
    case INPUT_POST_CHANGE: {
      let newState = {...state}
      state.postInput = action.text;
      break
    }
  }  
    
    return state;
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