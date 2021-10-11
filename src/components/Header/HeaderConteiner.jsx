import React from 'react';
import { connect } from 'react-redux';
import { authMe } from '../../state/api';
import { authActionCreator } from '../../state/header_reduser';
import Header from './Header';
import './header.css';

class HeaderConteiner extends React.Component  {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        authMe().then( response => {
            this.onAuth(true)
        })
    }
    onAuth = (bool) => {
        this.props.auth(bool)
    }
    render(){
        return <Header {...this.props}/>
    }
}

let mapStoreToProps = (state) => {
    return{
        header: state.header_reduser
    }
};
let mapDispatchToProps = {
    auth: authActionCreator
}

export default connect(mapStoreToProps, mapDispatchToProps)(HeaderConteiner);