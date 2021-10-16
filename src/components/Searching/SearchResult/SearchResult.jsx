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


    return (
        <div className="searching__result">    
            <div className="result__pages">
                {pagesCurrent.map(e => {
                    return <span onClick={()=> props.onChangeSearchPage(e) } className={e === props.searching.page ? '_active' : '' } >{e}</span>
                })}
                {props.searching.loading == true || props.searching.loading == undefined  ? <Preloader/> : null }
            </div>   
            {props.searching.users.map(e => {
                return(<AccountPreview user={e} onUnfollowing={props.onUnfollowing} onFollowing={props.onFollowing}/>)
            })}
        </div>
    )
}

export default SearchResult;