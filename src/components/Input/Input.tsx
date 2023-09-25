import React from 'react'
import '../Input/Input.css'

type InputProps = React.ComponentProps<'input'>  & {
    type: string,
    placeholder: string,
    width: string,
    height: string,
    borderRadius?: string 
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onBlur?: () => boolean,
    value?: string
}


function Input({type, placeholder, width, height, borderRadius,onChange, onBlur,value}: InputProps) {
  return (
    <input 
    type={type} 
    placeholder={placeholder} 
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    style=
    {{width: width, 
    height: height, 
    borderRadius: borderRadius}}></input>
  )
}

export default Input
