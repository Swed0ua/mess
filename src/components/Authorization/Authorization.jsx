import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import Login from './Login/Login';
import './authorization.css';
import background from '../../img/background/FEST_logo_poster-wrapper.jpg'
import logoColour from '../../img/ico/FEST_logo_det.png'
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
        return(
        <div className="authorization app__noWrapContent">

            <div className='authorization__background'><img src={background} loading='lazy'/></div>
            <div className='authorization__logoColour'>
                <img src={logoColour}/>
            </div>

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
