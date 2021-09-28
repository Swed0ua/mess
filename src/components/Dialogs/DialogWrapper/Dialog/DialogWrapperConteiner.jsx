import React from 'react';
import DialogWrapper from './DialogWrapper';
import {addMessageActionCreator, inputMessageChangeActionCreator} from './../../../../state/dialogs_reduser';
import { connect } from 'react-redux';

let mapStoreToProps = (state) => {
    console.log(state)
    return{
        dialogsPage: state.dialogs_reduser
    }
},
mapDispatchToProps =(dispatch)=> {
    return{
        addMessage: ()=>{
            dispatch(addMessageActionCreator());
        },
        inputMessageChange: (text)=>{
            dispatch(inputMessageChangeActionCreator(text));
        }
    }
}

export let DialogWrapperConteiner = connect(mapStoreToProps, mapDispatchToProps)(DialogWrapper);
export default DialogWrapperConteiner;