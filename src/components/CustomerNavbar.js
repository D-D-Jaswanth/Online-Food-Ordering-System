import React, { useState, useEffect, useContext } from 'react'
import { store } from '../App'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../screens/ContextReducer'
import { Badge } from 'antd'

function CustomerNavbar() {

  const [token, setToken] = useContext(store)
  const [data, setData] = useState(null)

  const [cart] = useCart()

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

  const logout = () => {
    setToken(null)
    navigate('/')
  }

  return (
    <div>
      {
        data &&
        <nav>
          <div>
            <Link to='/customerhomepage' className='logo'>OnlineFoodOrder</Link>
            <Link to='/order' className='link'>View Transactions</Link>
            <Link to='/profile' className='link profile'>
              <span class="material-symbols-outlined account-icon">person</span>
              <p>{data.fullname}</p>
            </Link>
            <Link to='/cart' className='link'>
              <Badge count={cart?.length}>
                <span className="material-symbols-outlined account-icon">add_shopping_cart</span>
              </Badge>
            </Link>
            <button onClick={logout} className='link'>
              <span class="material-symbols-outlined account-icon">logout</span>
            </button>
          </div>
        </nav>
      }
    </div>
  )
}

export default CustomerNavbar