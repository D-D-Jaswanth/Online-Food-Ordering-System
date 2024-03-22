import React, { useState, useEffect } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'

function ViewSeller() {

    const [sellers, setSellers] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/viewsellers')
            .then(sellers => setSellers(sellers.data))
            .catch(err => console.log(err))
    }, [sellers])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/deleteseller'+id)
        .then(res => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <AdminNavbar />
            <div className='view-seller-container'>
                <h3>View Sellers</h3>
                <div className='view-container'>
                    <form>
                        <input type='search' placeholder='Search Here....'
                            style={{ paddingLeft: "10px", height: "50px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                    <div style={{ overflowY: "scroll", overflowY: "hidden" }}>

                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Owner Name</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Pincode</th>
                                    <th scope="col">City/Town</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    sellers.filter((seller) => {
                                        return search.toLowerCase() === ''
                                            ? seller
                                            : seller.ownername.toLowerCase().includes(search);
                                    }).map(seller =>
                                    (
                                        <tr>
                                            <td>{seller.ownername}</td>
                                            <td>{seller.mobilenumber}</td>
                                            <td>{seller.email}</td>
                                            <td>{seller.address}</td>
                                            <td>{seller.pincode}</td>
                                            <td>{seller.city}</td>
                                            <td>
                                                <button onClick={(e) => handleDelete(seller._id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewSeller