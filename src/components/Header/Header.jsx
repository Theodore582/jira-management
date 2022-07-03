import React from 'react'
import logo from "../../images/logo.svg"
import './Header.css'

console.log(logo)
const Header = () => {
  return (
    <div className='header' >
    <div className='sub'>
        <img className="image" src={logo} alt="" />
        <button  className='btn'>Get it Free</button>
        </div>
    </div>
  )
}

export default Header