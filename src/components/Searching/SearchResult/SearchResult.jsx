import React from 'react';
import { useStore } from 'react-redux';
import AccountPreview from './AccountPreview/AccountPreview';
import * as axios from 'axios';

function SearchResult (props) {

    let users = new Array();
    console.log(props.users.length)
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            headers: {
            'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
        }
        }).then((response) => {
            users = response.data.items
            console.log(users);
            props.onLoadUsers(users);
        })
    }

    return (
        <div className="searching__result">        
            {props.users.map(e => {
                 return(<AccountPreview user={e} onUnfollowing={props.onUnfollowing} onFollowing={props.onFollowing}/>)
            })}
        </div>
    )
}

export default SearchResult;