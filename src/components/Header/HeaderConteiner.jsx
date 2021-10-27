import React from 'react';
import { connect } from 'react-redux';
import { authMeThunk, logoutThunk } from '../../state/thunk';
import Header from './Header';
import './header.css';

class HeaderConteiner extends React.Component  {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    onLogout=()=>{
        this.props.logout();
    }
    render(){
        return <Header {...this.props} onLogout={this.onLogout}/>
    }
}

let mapStoreToProps = (state) => {
    return{
        header: state.header_reduser,
        authMe: state.auth_reduser
    }
};
let mapDispatchToProps = {
    auth: authMeThunk,
    logout: logoutThunk
}

export default connect(mapStoreToProps, mapDispatchToProps)(HeaderConteiner);