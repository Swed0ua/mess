import React from 'react';
import './input.css'

let InputSimple = ({input, meta, ...props})=> {
        let inputError = (meta.touched && meta.error) ? true : false; 
        return (
            <div>
                <input className={(inputError) && '_error'} {...props} {...input} placeholder={props.placeholder}/>
                <div>{(inputError) && `${meta.error}`}</div>
            </div>
        )
    }

export default InputSimple;
