import React from 'react';
import { useStore } from 'react-redux';
import AccountPreview from './AccountPreview/AccountPreview';
import Preloader from '../../General/Preloader/Preloader';

function SearchResult (props) {

    let pagesCurrentHTML;
    let usersResultHtml;

    let pagesCurrent = new Array();
    for(let i = 1; i<=props.searching.pages; i++){
        pagesCurrent.push(i);
    }

    if (props.searching.users.length === 0) {
        props.usersShow(props.searching.page);
    } else {
        pagesCurrentHTML = pagesCurrent.map(e => {
            return <span onClick={()=> props.usersShow(e) } className={e === props.searching.page ? '_active' : '' } >{e}</span>
        })
        usersResultHtml = props.searching.users.map(e => {
            return(<AccountPreview user={e} onUnfollowing={props.onUnfollowing} onFollowing={props.onFollowing}/>)
       })
    }

    return (
        <div className="searching__result">    
            {props.searching.loading ? <Preloader/> : null }
            <div className="result__pages">
                {pagesCurrentHTML}
                
            </div>   
            {usersResultHtml}
        </div>
    )
}

export default SearchResult;