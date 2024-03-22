// import React, { useState, useEffect } from 'react'
// import SellerNavbar from '../components/SellerNavbar'
// import { useParams, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import moment from 'moment'

// function UpdateAction() {

//     const { id } = useParams()

//     const [orders, setOrders] = useState([])
//     const [status, setStatus] = useState([])
//     const navigate = useNavigate()

//     useEffect(() => {
//         axios.get('http://localhost:5000/getorderdetails/' + id)
//             .then(orders => {
//                 console.log(orders.data)
//                 setOrders(orders.data)
//             })
//             .catch(err => console.log(err))
//     }, [])

//     const Update = (e) => {
//         e.preventDefault()
//         axios.put('http://localhost:5000/updateorder/' + id)
//             .then(res => {
//                 console.log(res)
//                 navigate('/viewtrans')
//             })
//             .catch(err => console.log(err))
//     }

//     return (
//         <>
//             <SellerNavbar />
//             <div className='update-container'>
//                 <h3><center>Update Status</center></h3>
//                 <form onSubmit={Update}>
//                     <div className="row">
//                         <div className="col">
//                             <label htmlFor=''>Order ID</label>
//                             <input type="text" readOnly class="form-control" value={orders._id} placeholder="" aria-label="First name" />
//                         </div>
//                         <div className="col">
//                             <label htmlFor=''>Full name</label>
//                             <input type="text" readOnly class="form-control" value={orders.Users.fullname} placeholder="" aria-label="Last name" />
//                         </div>
//                     </div>
//                     <br />
//                     <div className='row'>
//                         <div className="col">
//                             <label htmlFor=''>Quantity</label>
//                             <input type="text" readOnly class="form-control" value={orders.Products} placeholder="" aria-label="Last name" />
//                         </div>
//                         <div className="col">
//                             <label htmlFor=''>Date</label>
//                             <input type="text" readOnly class="form-control" value={moment(orders.updatedAt).add(0, 'days').format('YYYY-MM-DD')} placeholder="" aria-label="Last name" />
//                         </div>
//                     </div>
//                     <br />
//                     <select name="status" onChange={(e) => setStatus(e.target.value)} class="form-select" id="floatingSelect" aria-label="Floating label select example">
//                         <option selected disabled>Open this select menu</option>
//                         <option value="Ordered Accepted">Ordered Accepted</option>
//                         <option value="Prepare to Deliver">Prepare to Deliver</option>
//                         <option value="waiting for the delivery Boy">waiting for the delivery Boy</option>
//                         <option value="Dispatched">Dispatched</option>
//                         <option value="Started">Started</option>
//                         <option value="Arrived">Arrived</option>
//                         <option value="Delivered">Delivered</option>
//                         <option value="cancel">cancel</option>
//                     </select>
//                     <br />

//                     <center><button className='btn btn-primary'>Update</button></center>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default UpdateAction