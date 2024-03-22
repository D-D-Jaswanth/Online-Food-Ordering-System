import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SellerNavbar from '../components/SellerNavbar'

function ViewDeliveryBoys() {

    const [boys, setBoys] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/viewdeliveryboys')
            .then(boys => setBoys(boys.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <SellerNavbar />
            <div className='view-boys-container'>
                <h4>ViewDeliveryBoys</h4>
                <form>
                    <input type='search' placeholder='Search Here....'
                        style={{ paddingLeft: "10px", height: "50px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">FullName</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boys && boys.filter(boy => {
                                return search.toLowerCase() === ''
                                ? boy
                                : boy.fullname.toLowerCase().includes(search);
                            }).map((boy) => {
                                return (
                                    <tr key={boy.id}>
                                        <td>{boy.fullname}</td>
                                        <td>{boy.mobilenumber}</td>
                                        <td>{boy.age}</td>
                                        <td style={{display: "flex", gap: "10px"}}>
                                            <button className='btn btn-primary'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ViewDeliveryBoys