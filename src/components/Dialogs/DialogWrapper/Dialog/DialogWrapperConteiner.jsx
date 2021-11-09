import React from 'react';
import DialogWrapper from './DialogWrapper';
import {addMessageActionCreator, inputMessageChangeActionCreator} from './../../../../state/dialogs_reduser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../../hoc/WithAuthRedirect';
import { getAuth } from '../../../../state/selects';

let mapStoreToProps = (state) => {
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
        },
        isAuth: getAuth
    }
}

export let DialogWrapperConteiner = compose(
    connect(mapStoreToProps, mapDispatchToProps)
    )
    (DialogWrapper);
export default DialogWrapperConteiner;