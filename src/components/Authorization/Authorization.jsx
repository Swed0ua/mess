import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import Login from './Login/Login';
import './authorization.css';
import background from '../../img/background/FEST_logo_poster-wrapper.jpg'
import logoColour from '../../img/ico/FEST_logo_det.png'
import { connect } from 'react-redux';
import { getCaptchaThunk, loginThunk, registrationThunk } from '../../state/thunk';
import { getAuth, getCaptcha } from '../../state/selects';
import Registration from './Registration/Registration';


class Authorization extends React.Component {
    componentDidMount=()=>{
            
    }
    onSubmit = (formData) => {
        console.log(formData)
        this.props.login(formData.login, formData.password, formData.checkbox)
    }
    onRegistration = (formData) => {
        console.log(formData)
        this.props.registration(formData.login, formData.password)
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
            <Route path="/auth/registration" render={() => <Registration {...this.props} onSubmit={this.onRegistration} />} ></Route>
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

export default connect(mapStoreToProps , {login: loginThunk, registration: registrationThunk ,  moveCaptcha: getCaptchaThunk})(Authorization);
