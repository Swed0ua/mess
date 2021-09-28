const SEND_MESSAGE = 'SEND-MESSAGE',
MESSAGE_INPUT_CHANGE = 'MESSAGE-INPUT-CHANGE'

let initialState = {
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
}

let dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      if (state.messageText.trim() !== ''){
        state.dialog.push(
          {id : "55", text:state.messageText, my: true}
        )
      }
      state.messageText = '';
      break;
  
    case MESSAGE_INPUT_CHANGE:
      state.messageText = action.text;
      break;
  } 
    return state;
}


export default dialogsReduser;
export let addMessageActionCreator = () => {
  return {
      type : SEND_MESSAGE
  }
};

export let inputMessageChangeActionCreator = (text) => {
  return {
      type: MESSAGE_INPUT_CHANGE, text: text
  }
}
