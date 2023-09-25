import React from 'react'
import './Button.css'
import { useLocation } from 'react-router-dom'

type ButtonProps = React.ComponentProps<'button'> & {
    width: string,
    height: string,
    color: string,
    padding?: string,
    background: boolean,
    border: boolean,
    onClick?: () => void
  }




function Button({width, height, color, padding, background, border, children,onClick}: ButtonProps) {


  
  return (
    <button className='button'
    onClick={onClick}
    style={
    {width: width,
     height: height,
     color: color,
     padding: padding,
     background: background ? '#2A7AE4' : '',
     border: border ? '1px solid rgba(42, 122, 228, 1)' : ''}}>
     {children}
    </button>
  )
}

export default Button
