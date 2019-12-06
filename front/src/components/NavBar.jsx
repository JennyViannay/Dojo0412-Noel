import React from 'react'
import { Link }  from 'react-router-dom'

const NavBar = () => {
	return (
	  <div>
	    <Link to="/">Home</Link>
	    <Link to="/lutin">Lutin</Link>
  	  <Link to="/child">Child</Link>
    </div>
	)
}

export default NavBar
