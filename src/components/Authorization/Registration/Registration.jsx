import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { mailValid, validSimpleInput } from '../../../state/form_validate';
import InputSimple from '../../FormComponents/InputSimple/InputSimple';
import './registration.css';

const Registration = (props) => {
    return (
        <div className="authorization__form">
            <form onSubmit={props.handleSubmit} >
                <h1 className="form__title" >Registration</h1>       
                <div className="form-login__input" >
                    <Field placeholder="login" name="login" type="text"
                     validate={[validSimpleInput, mailValid]}
                     component={InputSimple}/>
                </div>
                <div className="form-login__input" >
                    <Field placeholder="password"
                    validate={[validSimpleInput, mailValid]}
                    name="password" type="password" component={InputSimple}/>
                </div>
                <div className="form-login__input" >
                    <Field name="checkbox" type="checkbox"  component="input"/>
                    <label>remember me</label>
                </div>
                <button className="form-login__button button" >LOGIN</button>
                <div className='form-login__error'>{props.error}</div>
            </form>
        </div>
    )
}

export default reduxForm({form: 'registration'})(Registration);