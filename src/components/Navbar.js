import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <Link href='/' className='logo'>OnlineFoodOrder</Link>
          <Link to='/login' className='link user-login'>
          <span class="material-symbols-outlined account-icon">account_circle</span>
          </Link>
          <Link to='/adminlogin' className='admin-link'>Admin Login</Link>
          <Link to='/sellerlogin' className='seller-link'>Seller Login</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar