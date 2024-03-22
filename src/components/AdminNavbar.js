import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AdminNavbar() {

    const navigate = useNavigate()

    function logout(){
        navigate('/')
      }
  return (
    <div className='admin-navbar'>
        <nav>
          <div>
            <Link className='logo'>OnlineFoodOrder</Link>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <Link to='/viewcustomers' className='link'>View Customers</Link>
            <Link to='/viewsellers' className='link'>View Sellers</Link>
            <button onClick={logout} className='link'>
              <span class="material-symbols-outlined account-icon">logout</span>
            </button>
          </div>
        </nav>
    </div>
  )
}

export default AdminNavbar