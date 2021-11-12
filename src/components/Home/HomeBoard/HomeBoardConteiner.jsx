import React from 'react';
import { connect } from 'react-redux';
import HomeBoard from './HomeBoard';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAuthProfileThunk, getStatusThunk, updateStatusThunk } from '../../../state/thunk';
import { getAuthId } from '../../../state/selects';
import { WeatherAPI } from '../../../state/api';

class HomeBoardConteiner extends React.Component {

    constructor(props){
        super(props)
    }

    state = {
        statusInput: false,
        statusText: ''
    }

    component = () => {
        return <HomeBoard {...this.props} 
        onActiveStatusInput = {this.onActiveStatusInput}
        state = {this.state}
        onUpdateStatus = {this.onUpdateStatus}
        onChangeInputStatus = {this.onChangeInputStatus}
        />
    }

    componentDidMount(){
        this.checkUser()
        this.setState({
            statusText : this.props.profile.status || 'no status'
        })
    }

    componentDidUpdate(prerProps, prevState){
        if (prerProps.profile.status !== this.props.profile.status)
        {this.setState({
            statusText : this.props.profile.status || 'no status'
        })}
    }

    checkUser = () =>{
        let profileID = this.props.match.params.userId;
            if (!profileID) profileID = this.props.authId || (this.redirectToLogin()); 
            this.props.getAuthProfile(profileID);
            this.props.getStatus(profileID)
    }

    redirectToLogin=()=>{
        this.component =() => <Redirect to="/auth/login"/>
    }

    onActiveStatusInput = () =>{
        this.setState({
            statusInput : !this.state.statusInput
        }) 
    }   

    onUpdateStatus = (text) => {
        let consent = window.confirm('To change your status');
        if (consent){
            this.props.updateStatus(text);
        }
        this.onActiveStatusInput();
    }

    onChangeInputStatus = (newStatus) => {
        let text = newStatus.current.value
        this.setState({
            statusText : text
        })
    }

    render(){
        return(this.component())
    }
}

let mapStoreToProps = (state) => {
    return{
        profile: state.home_reduser,
        auth: state.auth_reduser,
        authId: getAuthId(state)
    }
};
let mapDispatchToProps = {
    getAuthProfile: getAuthProfileThunk,
    getStatus: getStatusThunk,
    updateStatus: updateStatusThunk  
}

export default compose(
    withRouter,
    connect(mapStoreToProps, mapDispatchToProps)
)(HomeBoardConteiner);