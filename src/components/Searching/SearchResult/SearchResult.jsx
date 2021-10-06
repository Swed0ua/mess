import React from 'react';
import { useStore } from 'react-redux';
import AccountPreview from './AccountPreview/AccountPreview';
import * as axios from 'axios';

function SearchResult (props) {

    let users = new Array();

    let usersShow = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.searching.page}&count=5`, {
            headers: {
            'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
        }
        }).then((response) => {
            users = response.data.items;
            let totalCount = response.data.totalCount;
            props.onLoadUsers(users, totalCount);
            console.log(response)
        })
    }
    
    if (props.searching.users.length === 0) {
        usersShow();
    }

    let pagesCurrent = new Array();
    for(let i = 1; i<props.searching.pages; i++){
        pagesCurrent.push(i);
    }
    return (
        <div className="searching__result">     
            <div className="result__pages">
                {pagesCurrent.map(e => {
                    return <span onClick={()=> props.onChangeSearchPage(e) } className={e === props.searching.page ? '_active' : '' } >{e}</span>
                })}
                
            </div>   
            {props.searching.users.map(e => {
                 return(<AccountPreview user={e} onUnfollowing={props.onUnfollowing} onFollowing={props.onFollowing}/>)
            })}
        </div>
    )
}

export default SearchResult;