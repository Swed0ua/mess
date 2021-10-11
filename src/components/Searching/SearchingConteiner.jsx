import React from 'react';
import {followingActionCreator, unfollowingChangeActionCreator, loadUsersActionCreator, changePageActionCreator, changePreloadActionCreator} from '../../../src/state/searching_reduser'
import { connect } from 'react-redux';
import Searching from './Searching';
import { followed, getUsers, unfollowed } from '../../state/api';

class SearchingConteiner extends React.Component {

    constructor(props){
        super(props)
    }
    
    onFollowing = (userId) => {
        
        followed(userId).then( response => {
            if(response.data.resultCode === 0) this.props.following(userId) 
        })

    }

    onUnfollowing = (userId) => {
        unfollowed(userId).then( response => {
            if(response.data.resultCode === 0) this.props.unfollowing(userId) 
        })
    }

    onLoadUsers = (users, totalCount) => {
        let total = Math.ceil(totalCount / this.props.searchingPage.pageSize);
        this.props.loadUsers(users, total);
        
    }

    onChangeSearchPage = (page) => {
        this.props.changePage(page);
    }

    onPreload = (load) => {
        this.props.changePreload(load)
    }

    usersShow = (page) => {
        console.log('start')
        
    getUsers(page).then((response) => {
            let users = response.data.items;
            let totalCount = response.data.totalCount;
            this.onLoadUsers(users, totalCount);
            console.log('end', response)
        }).catch((e) => {
            console.log(e)
        } )
    }

    render(){
        console.log(this.props)
        return (
            <Searching {...this.props} 
            onFollowing={this.onFollowing}
            onUnfollowing={this.onUnfollowing}
            onLoadUsers={this.onLoadUsers}
            onChangeSearchPage={this.onChangeSearchPage}
            usersShow = {this.usersShow}
            />
        )
    }

    
}

let mapStoreToProps = (state) => {
    return{
        searchingPage: state.searching_reduser
    }
};
let mapDispatchToProps = {
        following : followingActionCreator,
        unfollowing : unfollowingChangeActionCreator,
        loadUsers: loadUsersActionCreator,
        changePage: changePageActionCreator,
        changePreload : changePreloadActionCreator
}

export default connect(mapStoreToProps, mapDispatchToProps)(SearchingConteiner);