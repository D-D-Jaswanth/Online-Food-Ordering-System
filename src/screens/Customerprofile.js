import React, { useState, useContext, useEffect } from 'react'
import { store } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CustomerNavbar from '../components/CustomerNavbar'

function Customerprofile() {

  const [token, setToken] = useContext(store)
  const [data, setData] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/profile', {
      headers: {
        'x-token': token
      }
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [token])

  if (!token) {
    navigate('/login')
  }

  return (
    <>
    <CustomerNavbar />
      {
        data &&

        <div className='container'>
          <div className='profile-container'>
            <h1>Profile</h1>
            <form>
              <div className='profile-input-box'>
                <label htmlFor='fullname'>Fullname</label>
                <input placeholder='Enter full name' value={data.fullname} />
              </div>
              <div className='profile-input-box'>
                <label htmlFor='phonenumber'>Mobile Number</label>
                <input placeholder='Enter mobile number' value={data.phonenumber} />
              </div>
              <div className='profile-input-box'>
                <label htmlFor='email'>Email</label>
                <input placeholder='Enter email' value={data.email} />
              </div>
              <div className='profile-input-box'>
                <label htmlFor='email'>Password</label>
                <input type='password' placeholder='Enter email' value={data.password} />
              </div>
              <button type='submit'>Update</button>
            </form>
          </div>
        </div>

      }
    </>
  )
}

export default Customerprofile