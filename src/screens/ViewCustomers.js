import React, { useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import axios from 'axios'

function ViewCustomers() {

    const [customers, setCustomers] = useState([])

    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get('http://localhost:5000/viewcustomers')
            .then(customers => setCustomers(customers.data))
            .catch(err => console.log(err))
    }, [customers])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/deletecustomer/'+id)
        .then(res => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='admin-view-customers'>
            <AdminNavbar />
            <div className='table-container'>
                <h3>View all Customers</h3>
                <form>
                    <input type='search' placeholder='Search Here....' 
                    style={{ paddingLeft: "10px", height: "50px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }} 
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <div style={{overflowY: "scroll", overflowY: "hidden"}}>

                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Fullname</th>
                            <th scope="col">Mobile number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers && customers.filter((d) => {
                                return search.toLowerCase() === '' 
                                ? d 
                                : d.fullname.toLowerCase().includes(search);
                            }).map((d) =>
                            (

                                <tr key={d._id}>
                                    <td>{d.fullname}</td>
                                    <td>{d.phonenumber}</td>
                                    <td>{d.email}</td>
                                    <td>{d.password}</td>
                                    <td style={{ display: "flex", gap: "10px" }}>
                                        {/* <Link to={`/updatecustomer/${d._id}`} className='btn btn-primary'>Edit</Link> */}
                                        <button onClick={(e) => handleDelete(d._id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
                
                </div>
            </div>

        </div>
    )
}

export default ViewCustomers