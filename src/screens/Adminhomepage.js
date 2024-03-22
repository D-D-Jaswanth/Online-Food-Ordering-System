import React from 'react'
import { useLocation } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

function Adminhomepage() {

  const location = useLocation()

  // const navigate = useNavigate()
  return (
    <div className='adminhomepage'>
      <AdminNavbar />
      <center>
        <h1>Welcome {location.state.id}</h1>
      </center>
    </div>
  )
}

export default Adminhomepage