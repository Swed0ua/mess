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
                usersShow = {props.usersShow}
                onPreload={props.onPreload}
                />
        </div>
    )
}

export default Searching;