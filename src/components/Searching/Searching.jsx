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

    let onLoadUsers = (users, totalCount) => {
        props.loadUsers(users, totalCount);
        
    }

    let onChangeSearchPage = (page) => {
        props.changePage(page)
    }

    return (
        <div className="searching ">
            <div className="searching__searchArea"></div>
            <SearchResult onChangeSearchPage={onChangeSearchPage} onFollowing={onFollowing} onLoadUsers={onLoadUsers} onUnfollowing={onUnfollowing} searching={props.searchingPage}/>
        </div>
    )
}

export default Searching;