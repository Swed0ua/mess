import React from 'react';
import {followingActionCreator, unfollowingChangeActionCreator, loadUsersActionCreator, changePageActionCreator} from '../../../src/state/searching_reduser'
import { connect } from 'react-redux';
import Searching from './Searching';

let mapStoreToProps = (state) => {
    return{
        searchingPage: state.searching_reduser
    }
},
mapDispatchToProps = {
        following : followingActionCreator,
        unfollowing : unfollowingChangeActionCreator,
        loadUsers: loadUsersActionCreator,
        changePage: changePageActionCreator
}

export let SearchingConteiner = connect(mapStoreToProps, mapDispatchToProps)(Searching);

export default SearchingConteiner;