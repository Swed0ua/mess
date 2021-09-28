import React from 'react';
import Posts from './Posts';
import './posts.css';
import {addPostActionCreator, inputPostChangeActionCreator} from '../../../state/home_reduser'
import { connect } from 'react-redux';

let mapStoreToProps = (state) => {
    return{
        profilePage: state.home_reduser
    }
},
mapDispatchToProps =(dispatch)=> {
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator());
        },
        inputPostsChange: (text)=>{
            dispatch(inputPostChangeActionCreator(text));
        }
    }
}

export let PostConteiner = connect(mapStoreToProps, mapDispatchToProps)(Posts);

export default PostConteiner;