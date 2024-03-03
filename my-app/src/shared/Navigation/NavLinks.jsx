import React from 'react'
import './NavLinks.css'
import { NavLink } from 'react-router-dom'
///the navlink analyzes the url and also allows us to color the link differently if we are on th =e page the link leads us to 

const NavLinks = (props) => {
  return (
    <ul className='nav-links' id='nav-link'>
        <li>
            <NavLink to='/' exact>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'>MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>ADD PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>
        
    </ul>
  )
}

export default NavLinks