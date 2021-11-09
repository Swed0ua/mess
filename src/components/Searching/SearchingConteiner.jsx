import React from 'react';
import {followingActionCreator, unfollowingChangeActionCreator, loadUsersActionCreator, changePageActionCreator, changePreloadActionCreator} from '../../../src/state/searching_reduser'
import { connect } from 'react-redux';
import Searching from './Searching';
import { Redirect } from 'react-router-dom';
import { followingThunk, getUsersThunk, unfollowingThunk } from '../../state/thunk';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class SearchingConteiner extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.onPreload(true);
        this.usersShow(this.props.searchingPage.page);
    }
    
    onFollowing = (userId) => {
       this.props.following(userId);
    }

    onUnfollowing = (userId) => {
        this.props.unfollowing(userId);
    }

    /* onChangeSearchPage = (page) => {
        this.onPreload(true);
        this.props.changePage(page);
        this.usersShow(page)
    } */

    onPreload = (load) => {
        this.props.changePreload(load)
    }

    usersShow = (page) => {
        this.props.getUsers(page);
    }

    render(){
        return (
            <Searching {...this.props} 
            onFollowing={this.onFollowing}
            onUnfollowing={this.onUnfollowing}
            onLoadUsers={this.onLoadUsers}
            //onChangeSearchPage={this.onChangeSearchPage}
            usersShow = {this.usersShow}
            onPreload={this.onPreload}
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
        following : followingThunk,
        unfollowing : unfollowingThunk,
        changePage: changePageActionCreator,
        changePreload : changePreloadActionCreator,
        getUsers: getUsersThunk
}

export default compose(
    connect(mapStoreToProps, mapDispatchToProps),
)(SearchingConteiner)