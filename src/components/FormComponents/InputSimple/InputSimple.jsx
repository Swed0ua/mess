import React from 'react';
import './input.css'

let InputSimple = ({input, meta, ...props})=> {
        let inputError = (meta.touched && meta.error) ? true : false;
        let inputClass = 'form__input';
        if (inputError) inputClass += ' _error';
        return (
            <div>
                <input className={inputClass} {...props} {...input} placeholder={props.placeholder}/>
                {<div className="form__error" >{(inputError) && `${meta.error}`}</div>}
            </div>
        )
    }

export default InputSimple;
