import React from 'react';
import './searching.css'
import SearchResult from './SearchResult/SearchResult';

function Searching (props) {

    let onFollowing = () => {
        props.following()
    }

    let onUnfollowing = () => {
        props.unfollowing()
    }

    return (
        <div className="searching app__noWrapContent">
            <div className="searching__searchArea"></div>
            <SearchResult />
        </div>
    )
}

export default Searching;