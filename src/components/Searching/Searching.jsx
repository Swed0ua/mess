import React from 'react';
import './searching.css'
import SearchResult from './SearchResult/SearchResult';

function Searching (props) {

    let onFollowing = (userId) => {
        props.following(userId)
    }

    let onUnfollowing = (userId) => {
        props.unfollowing(userId)
    }

    let onLoadUsers = (users) => {
        props.loadUsers(users)
    }

    return (
        <div className="searching ">
            <div className="searching__searchArea"></div>
            <SearchResult onFollowing={onFollowing} onLoadUsers={onLoadUsers} onUnfollowing={onUnfollowing} users={props.searchingPage.users}/>
        </div>
    )
}

export default Searching;