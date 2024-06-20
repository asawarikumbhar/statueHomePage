import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState('shop');

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>KumbharArt</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu('home')}}><Link style={{ textDecoration:'none'}} to='/'>Home</Link> {menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('stute')}}><Link style={{ textDecoration:'none'}} to='/statue'>Stute</Link> {menu==='stute'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('temple')}}><Link style={{ textDecoration:'none'}} to='/temple'>Temple</Link> {menu==='temple'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('potter')}}><Link style={{ textDecoration:'none'}} to='/potter'>Potter</Link> {menu==='potter'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
