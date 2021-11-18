import React, { useEffect, useState } from 'react';
import AccountPreview from './AccountPreview/AccountPreview';
import Preloader from '../../General/Preloader/Preloader';
import Paginator from '../../General/Paginator/Paginator';
import { connect, useDispatch } from 'react-redux';
import { changeSearchPageThunk } from '../../../state/thunk';
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
    let dispatch = useDispatch();

    let [resultPage, setResultPage] = useState(props.searching.page),
        [numberOfPages, setNumberOfPages] = useState(allPage),
        [maxItems, setMaxItems] = useState(7),
        [pageSize, setPageSize] = useState(props.searching.pageSize),
        [loading, setLoading] = useState(props.searching.loading),
        [users, setUsers] = useState(props.searching.users)


        console.log(allPage, numberOfPages)

    useEffect(()=>{
        
    }, [])


    useEffect(()=>{
        setResultPage(props.searching.page)
    }, [resultPage])

    useEffect(()=>{
        setNumberOfPages(props.searching.pages)
    }, [numberOfPages, allPage])

    const onChangeResultPage = (page) => {
        setResultPage(page)
        props.changePage(page)
    }


    

    return (
        <div className="searching__result">    
            <div className="result__pages">
                <Paginator 
                resultPage={resultPage}
                numberOfPages={numberOfPages}
                maxItems={maxItems}
                onChangeResultPage={onChangeResultPage}
                />
                {props.searching.loading == true || props.searching.loading == undefined  ? <div className="searching__preloader"><Preloader/></div> : null }
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
    changePage: changeSearchPageThunk    
    }


export default connect(mapStoreToProps, mapDispatchToProps)(SearchResult);