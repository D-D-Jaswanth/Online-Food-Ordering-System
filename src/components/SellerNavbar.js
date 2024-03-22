import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function SellerNavbar() {

  // const location = useLocation()
  const navigate = useNavigate()

  function logout() {
    navigate('/')
  }

  return (
    <div className='seller-navbar'>
      <nav>
        <div>
          <Link to='/sellerhomepage' className='logo'>OnlineFoodOrder</Link>
          <Link to='/viewtrans' className='link'>View Transactions</Link>
          <Link to='/adddeliveryboys' className='link'>Add Delivery boys</Link>
          <Link className='link'>
            <span className="material-symbols-outlined account-icon">person</span>
          </Link>
          <button onClick={logout} className='link'>
            <span class="material-symbols-outlined account-icon">logout</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SellerNavbar