import React from 'react'
import logo from './logo.jpg'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')

  }
  return (
    <div  className='nav-ui'>
      
      {auth ?
      <ul >
        <img className='logo' alt = "hmm" src={logo} height = "80" width = "80"/>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
        <li><Link to="/info" style={{ textDecoration: 'none', color: 'white' }}>Info</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></li>
        <li><Link to="/login" onClick={logout} style={{ textDecoration: 'none', color: 'red' }}>Logout ({JSON.parse(auth).fname})</Link></li> 
      </ul>
      :
      <ul className='nav-ui nav-ui-right'>
        <img className='logo' alt = "hmm" src={logo} height = "80" width = "80"/>
        <li><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></li>
              <li><Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link></li>
      </ul> 
      }
    </div>

  )
}
export default Nav;