import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/styles.css'
function Navbar() {
  return (
    <div className='allnav'>
<nav className='navbar'>
        <div className='leftnav'><span>SHIPPING BOX</span></div>
        <div className='rightnav'>
            <Link to={"/list"}>LIST OF BOXES</Link>
            <Link to={"/form"}>FILL A FORM</Link>
        </div>

    </nav>
    </div>
    
  )
}

export default Navbar