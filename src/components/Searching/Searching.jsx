import React from 'react';
import './searching.css'
import SearchResult from './SearchResult/SearchResult';

function Searching (props) {
    return (
        <div className="searching ">
            <div className="searching__searchArea"></div>
            <SearchResult
                onChangeSearchPage={props.onChangeSearchPage}
                onFollowing={props.onFollowing}
                onLoadUsers={props.onLoadUsers} 
                onUnfollowing={props.onUnfollowing} 
                searching={props.searchingPage}
                usersShow = {props.usersShow}
                />
        </div>
    )
}

export default Searching;