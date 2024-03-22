import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SellerNavbar from '../components/SellerNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EditOrderDetails() {
    const { id } = useParams()
    const [orders, setOrders] = useState({
        status: ''
    })
    const [changestatus, setChangeStatus] = useState(["Ordered Accepted", "Prepare to Deliver", "Dispatched", "Started", "Arrived", "cancel"])

    useEffect(() => {
        axios.get('http://localhost:5000/editorderdetails/' + id)
            .then(orders => {
                setOrders(orders.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const navigate = useNavigate()

    const handleChange = (e) => {
        setOrders({ ...orders, [e.target.name]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/updateorderdetails/' + id, orders)
            .then(orders => {
                setOrders(orders.data)
                alert('Order Updated Successfully')
                navigate('/viewtrans')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <SellerNavbar />
            <div className='container' style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <form>
                    <center><h3>Update Order</h3></center>
                    <select
                        class="form-select" aria-label="Default select example"
                        onChange={handleChange}
                        name='status'
                    >
                        {
                            changestatus.map((s, i) => (
                                <option key={i} value={s}>{s}</option>
                            ))
                        }
                    </select>
                    <br />
                    <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
                </form>
            </div>
        </>
    )
}

export default EditOrderDetails