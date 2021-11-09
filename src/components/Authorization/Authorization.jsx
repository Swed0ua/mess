import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import Login from './Login/Login';
import './authorization.css';
import { connect } from 'react-redux';
import { getCaptchaThunk, loginThunk } from '../../state/thunk';
import { getAuth, getCaptcha } from '../../state/selects';


class Authorization extends React.Component {
    componentDidMount=()=>{
            
    }
    onSubmit = (formData) => {
        this.props.login(formData.login, formData.password, formData.checkbox)
    }
    render(){
        if (this.props.isAuth){
            return <Redirect to="/home"/>
        }
        return(<div className="authorization app__noWrapContent">
            <Route path="/auth/login" render={() => <Login {...this.props} login={this.props.login} onSubmit={this.onSubmit} />} ></Route>
        </div>)
    }
}

let mapStoreToProps = (state) => {
    return{
        formStore: state.form,
        captcha: getCaptcha(state),
        isAuth: getAuth(state)
    }
};

export default connect(mapStoreToProps , {login: loginThunk,  moveCaptcha: getCaptchaThunk})(Authorization);
