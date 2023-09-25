import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
  return (
    <nav className='navbar'>
      <ul>
      {!isHomePage && (
          <li>
            <Link to="/">Login</Link>
          </li>
        )}
        <li>
          <Link to="/home">Rick and Morty</Link>
        </li>
        <li>
          <Link to="/HomeCocktails">Cocktails</Link>
        </li>            
      </ul>
    </nav>
  )
}

export default Navbar