import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { mailValid, maxSimbol, minSimbol, validSimpleInput } from '../../../state/form_validate';
import InputSimple from '../../FormComponents/InputSimple/InputSimple';

let maxSimbol15 = maxSimbol(15);
let minSimbol6 = minSimbol(6)

class Login extends React.Component {
    render(){

        return(<div className="authorization__form">
            <form onSubmit={this.props.handleSubmit }>
                <h1> Login </h1>       
                <div className="form-login__input" >
                    <Field placeholder="login" name="login" type="text"
                     validate={[validSimpleInput, mailValid]}
                     component={InputSimple}/>
                </div>
                <div className="form-login__input" >
                    <Field placeholder="password"
                    validate={[validSimpleInput, minSimbol6]}
                    name="password" type="password" component={InputSimple}/>
                </div>
                <div className="form-login__input" >
                    <Field name="checkbox" type="checkbox"  component="input"/>
                    <label>remember me</label>
                </div>
                {this.props.captcha && <div><img src={this.props.captcha} alt="captcha"/></div>}
                <button className="form-login__button button" >LOGIN</button>
                <div className='form-login__error'>{this.props.error}</div>
            </form>
        </div>)
    }
}

const InputForm = ({input, meta, ...props}) => {
    console.log(input)
    return (
        <div>
            {(meta.touched && meta.error) ? 'have problem' : 'no problem'}
            <input {...props} {...input} placeholder={props.placeholder} type="text"/>
            </div>
    )
}

export default reduxForm({form: 'login'})(Login);
