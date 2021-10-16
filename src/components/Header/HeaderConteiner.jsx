import React from 'react';
import { connect } from 'react-redux';
import { authMeThunk } from '../../state/thunk';
import Header from './Header';
import './header.css';

class HeaderConteiner extends React.Component  {
    constructor(props){
        super(props)
    }
    componentDidMount(){
       this.props.auth()
    }
    render(){
        return <Header {...this.props}/>
    }
}

let mapStoreToProps = (state) => {
    return{
        header: state.header_reduser,
        authMe: state.auth_reduser
    }
};
let mapDispatchToProps = {
    auth: authMeThunk
}

export default connect(mapStoreToProps, mapDispatchToProps)(HeaderConteiner);