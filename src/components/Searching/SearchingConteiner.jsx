import React from 'react';
import {followingActionCreator, unfollowingChangeActionCreator} from '../../../src/state/searching_reduser'
import { connect } from 'react-redux';
import Searching from './Searching';

let mapStoreToProps = (state) => {
    return{
        profilePage: state.home_reduser
    }
},
mapDispatchToProps = (dispatch)=> {
   return { following : () => {
        dispatch(followingActionCreator())
    },
    unfollowing : () => {
        dispatch(unfollowingChangeActionCreator())
    }}
}

export let SearchingConteiner = connect(mapStoreToProps, mapDispatchToProps)(Searching);

export default SearchingConteiner;