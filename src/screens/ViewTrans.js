import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SellerNavbar from '../components/SellerNavbar'
import moment from 'moment'
import { Link } from 'react-router-dom'

function ViewTrans() {

  const [orders, setOrders] = useState([])

  const [search, setSearch] = useState('')

  const [status, setStatus] = useState(["Ordered Accepted", "Prepare to Deliver", "Dispatched", "Started", "Arrived", "cancel"])

  useEffect(() => {
    axios.get('http://localhost:5000/viewtrans')
    .then(orders => {
      setOrders(orders.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // const handleChange = async (id, value) => {
  //   try {
  //     await axios.put(`http://localhost:5000/order-status/${id}`,
  //       { status: value })
  //     getOrders()
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <SellerNavbar />
      <div className='seller-trans-container'>
        <h3><center>All Orders</center></h3>
        <form>
          <input type='search' placeholder='Search Here....'
            style={{ paddingLeft: "10px", height: "50px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <br />
        {

          orders.filter(item => {
            return search.toLowerCase() === ''
              ? item
              : item.Users.fullname.toLowerCase().includes(search);
          }).map((item, i) => (

            <div>

              <h5>Date : {moment(item.updatedAt).add(0, 'days').format('YYYY-MM-DD')}</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">User</th>
                    <th scope="col">Time</th>
                    <th scope="col">Quantity</th>
                    <th scope='"col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{i + 1}</th>
                    <td>{item.status}</td>
                    <td>{item.Users.fullname}</td>
                    <td>{moment(item.createAt).fromNow()}</td>
                    <td>{item.Products.length}</td>
                    <td>
                      <Link to={`/editorderdetails/${item._id}`} className='btn btn-primary'>Edit</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='users-trans-product-container'>
                {
                  item?.Products?.map((p, i) => {
                    return (

                      <div style={{ boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)", display: "flex", marginBottom: "20px", borderRadius: "5px" }}>
                        <img src={`/uploads/${p.image}`} alt={p.Itemname} />
                        <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "20px", gap: "20px", marginTop: "20px" }}>
                          <p>{p.Itemname}</p>
                          <h6>Price : {p.Price}</h6>
                        </div>
                      </div>

                    )
                  })
                }
              </div>

            </div>

          ))
        }
      </div>
    </>
  )
}

export default ViewTrans