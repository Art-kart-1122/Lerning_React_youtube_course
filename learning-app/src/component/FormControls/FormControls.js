import React from "react";
import style from './FormControls.module.css'


const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;

    return <div className={style.formControls +" "+ (hasError ? style.error : "")}>
        <div>
            {props.children}
        </div>
        {hasError &&<span>{meta.error}</span>}
    </div>
}





export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>

}


