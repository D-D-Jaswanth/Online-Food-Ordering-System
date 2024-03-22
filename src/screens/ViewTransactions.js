import React, { useState, useEffect, useContext } from 'react'
import CustomerNavbar from '../components/CustomerNavbar'
import axios from 'axios'
import moment from 'moment'
import { store } from '../App'
import { useNavigate } from 'react-router-dom'

function ViewTransactions() {

  const [orders, setOrders] = useState([])
  const [token, setToken] = useContext(store)
  const [userData, setUserData] = useState(null)

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/order')
      .then(orders => {
        setOrders(orders.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/profile', {
      headers: {
        'x-token': token
      }
    })
      .then(res => {
        setUserData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  if(!token){
    navigate('/')
  }

  return (
    <>
      <CustomerNavbar />
      <div className='transaction-container'>
        <h4><center>View Transactions</center></h4>
        <form>
          <input type='search' placeholder='Search Here....'
            style={{ paddingLeft: "10px", height: "50px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <br />
        {
        
          orders.filter(item => {
            return search.toString() === ''
              ? item : item.updatedAt.toString().includes(search);
          }).map((item, i) => (

            (item?.Users?.fullname === userData?.fullname) ?

              <div>
                {/* <p>{item.Products[i].Itemname}</p> */}
                <h5>Date : {moment(item.updatedAt).add(0, 'days').format('YYYY-MM-DD')}</h5>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      {/* <th scope="col">#</th> */}
                      <th scope="col">User</th>
                      <th scope="col">Status</th>
                      <th scope="col">Time</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <th>{i + 1}</th> */}
                      <td>{item?.Users?.fullname}</td>
                      <td>{item.status}</td>
                      <td>{moment(item.createAt).fromNow()}</td>
                      <td>{item.Products.length}</td>
                      {/* <td>{item.Products.length * item.Products.Price}</td> */}
                    </tr>
                  </tbody>
                </table>

                <div className='users-trans-product-container'>
                  {
                    item?.Products?.map((p, i) => {
                      return (

                        <div key={p._id} style={{ boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)", display: "flex", marginBottom: "20px", borderRadius: "5px" }}>
                          <img src={`/uploads/${p.image}`} alt={p.Itemname} />
                          <div className='trans-product-right' style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "20px", gap: "20px", marginTop: "20px" }}>
                            <p>{p.Itemname}</p>
                            <h6>Price : {p.Price}</h6>
                          </div>
                        </div>

                      )
                    })
                  }
                </div>
              </div>
            : null
            // <h4><center>No Data Found</center></h4>
          ))
        }
      </div>
    </>
  )
}

export default ViewTransactions