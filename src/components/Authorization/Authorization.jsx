import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Login from './Login/Login';
import './authorization.css';
import { connect } from 'react-redux';
import { getCaptchaThunk, loginThunk } from '../../state/thunk';


class Authorization extends React.Component {
    componentDidMount=()=>{
            
    }
    onSubmit = (formData) => {
        this.props.login(formData.login, formData.password, formData.checkbox)
    }
    render(){
        return(<div className="authorization app__noWrapContent">
            <Route path="/auth/login" render={() => <Login {...this.props} login={this.props.login} onSubmit={this.onSubmit} />} ></Route>
        </div>)
    }
}

let mapStoreToProps = (state) => {
    return{
        formStore: state.form,
        auth: state.auth_reduser
    }
};

export default connect(mapStoreToProps , {login: loginThunk,  captcha: getCaptchaThunk})(Authorization);
