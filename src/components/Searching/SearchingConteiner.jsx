import React from 'react';
import {followingActionCreator, unfollowingChangeActionCreator, loadUsersActionCreator} from '../../../src/state/searching_reduser'
import { connect } from 'react-redux';
import Searching from './Searching';

let mapStoreToProps = (state) => {
    return{
        searchingPage: state.searching_reduser
    }
},
mapDispatchToProps = (dispatch)=> {
   return { following : (userId) => {
        dispatch(followingActionCreator(userId))
    },
    unfollowing : (userId) => {
        dispatch(unfollowingChangeActionCreator(userId))
    },
    loadUsers: (users) => {
        dispatch(loadUsersActionCreator(users))
    }    
}
}

export let SearchingConteiner = connect(mapStoreToProps, mapDispatchToProps)(Searching);

export default SearchingConteiner;