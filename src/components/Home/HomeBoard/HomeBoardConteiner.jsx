import React from 'react';
import { connect } from 'react-redux';
import HomeBoard from './HomeBoard';
import {loadProfileActionCreator} from '../../../state/home_reduser'
import { getProfile } from '../../../state/api';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAuthProfileThunk } from '../../../state/thunk';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';

class HomeBoardConteiner extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let profileID = this.props.match.params.userId
        this.props.getAuthProfile(profileID)
    }
    render(){
        return(<HomeBoard {...this.props}/>)
    }
}

let mapStoreToProps = (state) => {
    return{
        profile: state.home_reduser,
        auth: state.auth_reduser
    }
};
let mapDispatchToProps = {
    getAuthProfile: getAuthProfileThunk
}

export default compose(
    withRouter,
    connect(mapStoreToProps, mapDispatchToProps),
    WithAuthRedirect
)(HomeBoardConteiner);