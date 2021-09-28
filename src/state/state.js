import dialogsReduser from "./dialogs_reduser";
import homeReduser from "./home_reduser";

let allTreeRender;

let store = {
  _state: {
    homePage: {
      posts: [
        {author : 'User', text:"Hello world!"},
        {author : 'User', text:"How are your"},
        {author : 'User', text:"Hello world!"},
        {author : 'User', text:"Have a nice day, guys"}
      ],
    postInput: ''
    },
    messagePage: {
      dialog: [
        {id : 1, text: 'Hi', my: false},
        {id : 2, text: 'Holla!', my: true},
        {id : 3, text: 'Haw are you?', my: false},
        {id : 4, text: 'I\'m fine, thanks =)', my: true},
        {id : 5, text: 'Haw are you, too?', my: true}
      ],
    dialogsPreview: [
        {id:"1", name:"Robert Lewandowsky", lastMes:"Hi!", newMes:"+5", active:true},
        {id:"2", name:"Vania 2001", lastMes:"Wtf?", newMes:"+1", active:false},
        {id:"3", name:"Manuel Noer", lastMes:"Hahaha, not bad", newMes:"+1", active:false},
        {id:"4", name:"Anonimus", lastMes:"", newMes:"", active:true},
      ],
    messageText: ''
    },
  },
  subscribe (observer) {
    allTreeRender = observer;
  },
  
  getState () {
    return this._state
  },
  dispatch (action) {
    console.log(action);

    this._state.dialog = dialogsReduser(this._state.messagePage, action);
    this._state.posts = homeReduser(this._state.homePage, action);
      
    allTreeRender()
  
    }
}

export default store;

