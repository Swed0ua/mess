import React from 'react';
import { connect } from 'react-redux';
import HomeBoard from './HomeBoard';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAuthProfileThunk, getStatusThunk, updateStatusThunk } from '../../../state/thunk';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';

class HomeBoardConteiner extends React.Component {

    constructor(props){
        super(props)
    }

    state = {
        statusInput: false,
        statusText: ''
    }

    componentDidMount(){
        let profileID = this.props.match.params.userId;
        if (!profileID) profileID = '20018'; 
        this.props.getAuthProfile(profileID);
        this.props.getStatus(profileID)
        this.setState({
            statusText : this.props.profile.status || 'no status'
        })
        console.log(this.props.profile.status)
    }

    componentDidUpdate(prerProps, prevState){
        if (prerProps.profile.status !== this.props.profile.status)
        {this.setState({
            statusText : this.props.profile.status || 'no status'
        })}
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
        return(<HomeBoard {...this.props} 
            onActiveStatusInput = {this.onActiveStatusInput}
            state = {this.state}
            onUpdateStatus = {this.onUpdateStatus}
            onChangeInputStatus = {this.onChangeInputStatus}
            />)
    }
}

let mapStoreToProps = (state) => {
    return{
        profile: state.home_reduser,
        auth: state.auth_reduser
    }
};
let mapDispatchToProps = {
    getAuthProfile: getAuthProfileThunk,
    getStatus: getStatusThunk,
    updateStatus: updateStatusThunk
}

export default compose(
    withRouter,
    connect(mapStoreToProps, mapDispatchToProps),
    WithAuthRedirect
)(HomeBoardConteiner);