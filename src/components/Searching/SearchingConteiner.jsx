import React from 'react';
import {followingActionCreator, unfollowingChangeActionCreator, loadUsersActionCreator, changePreloadActionCreator} from '../../../src/state/searching_reduser'
import { connect } from 'react-redux';
import Searching from './Searching';
import * as axios from 'axios';

class SearchingConteiner extends React.Component {

    constructor(props){
        super(props)
    }
    
    onFollowing = (userId) => {
        this.props.following(userId)
    }

    onUnfollowing = (userId) => {
        this.props.unfollowing(userId)
    }

    onLoadUsers = (page, users, totalCount) => {
        let total = Math.ceil(totalCount / this.props.searchingPage.pageSize);
        this.props.loadUsers(page, users, total);
        
    }

    onPreload = (load) => {
        this.props.changePreload(load)
    }

    usersShow = (page) => {
        console.log('start')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=5`, {
            headers: {
            'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
        }
        }).then((response) => {
            //this.onPreload(false);
            let users = response.data.items;
            let totalCount = response.data.totalCount;
            this.onLoadUsers(page, users, totalCount);
            console.log('end')
        })
    }

    render(){
        console.log(this.props)
        return (
            <Searching {...this.props} 
            onFollowing={this.onFollowing}
            onUnfollowing={this.onUnfollowing}
            onLoadUsers={this.onLoadUsers}
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
        changePreload : changePreloadActionCreator
}

export default connect(mapStoreToProps, mapDispatchToProps)(SearchingConteiner);