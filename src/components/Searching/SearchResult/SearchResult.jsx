import React, { useEffect, useState } from 'react';
import AccountPreview from './AccountPreview/AccountPreview';
import Preloader from '../../General/Preloader/Preloader';
import Paginator from '../../General/Paginator/Paginator';
import { connect } from 'react-redux';
import { changePageActionCreator, changePreloadActionCreator } from '../../../state/searching_reduser';
import { getUsersThunk } from '../../../state/thunk';
import { getSearchingReduser } from '../../../state/selects';

function SearchResult (props) {

    /* onChangeSearchPage = (page) => {
        this.onPreload(true);
        this.props.changePage(page);
        this.usersShow(page)
    } 
    
    users: [],
    pageSize: 5,
    page: 1,    
    pages: 20,
    loading: false

    */

    let allPage = props.searching.pages;

    let [resultPage, setResultPage] = useState(1),
        [numberOfPages, setNumberOfPages] = useState(1),
        [pageSize, setPageSize] = useState(1),
        [loading, setLoading] = useState(false),
        [users, setUsers] = useState([])


        console.log(allPage, numberOfPages)

    useEffect(()=>{
        setResultPage(props.searching.page)
        setNumberOfPages(allPage)
        setPageSize(props.searching.pageSize)
        setLoading(props.searching.loading)
        setUsers(props.searching.users)
    }, [])


    useEffect(()=>{
        setNumberOfPages(props.searching.pages)
        setResultPage(props.searching.page)
    }, [allPage, resultPage])

    

    return (
        <div className="searching__result">    
            <div className="result__pages">
                <Paginator 
                resultPage={resultPage}
                numberOfPages={numberOfPages}
                setResultPage={setResultPage}
                />
                {props.searching.loading == true || props.searching.loading == undefined  ? <Preloader/> : null }
            </div>   
            {props.searching.users.map(e => {
                return(<AccountPreview user={e} onUnfollowing={props.onUnfollowing} onFollowing={props.onFollowing}/>)
            })}
        </div>
    )
}



let mapStoreToProps = (state) => {
    return{
        searching: getSearchingReduser(state)
    }
};
let mapDispatchToProps = {
        changePage: changePageActionCreator,
        changePreload : changePreloadActionCreator,
        getUsers: getUsersThunk
}


export default connect(mapStoreToProps, mapDispatchToProps)(SearchResult);