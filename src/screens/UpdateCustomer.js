import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar';
import { store } from '../App'

function UpdateCustomer() {

    const { id } = useParams();

    // const [data, setData] = useState({
    //     fullname: '',
    //     phonenumber: '',
    //     email: '',
    //     password: ''
    // })

    const [token, setToken] = useContext(store)
    const [data, setData] = useState(null)

    const navigate = useNavigate()

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/updatecustomer/' + id)
            .then(data => {
                console.log(data)
                // setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/updatecustomer/' + id, {
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

    // const handlesubmit = e => {
    //     e.preventDefault();
    //     axios.put('http://localhost:5000/updatecustomer/'+id, data)
    //         .then(result => {
    //             alert(result.data)
    //             navigate('/login')
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div>
            <AdminNavbar />
            <div className='register'>
                <form action='POST'>
                    <h1>Update Customer</h1>
                    <div className='input-box'>
                        <input type='text' onChange={changeHandler} placeholder='Enter full name' name='fullname' required />
                    </div>
                    <div className='input-box'>
                        <input type='number' onChange={changeHandler} placeholder='Enter Phone number' name='phonenumber' required />
                    </div>
                    <div className='input-box'>
                        <input type='email' onChange={changeHandler} placeholder='Enter email' name='email' required />
                    </div>
                    <div className='input-box'>
                        <input type='password' onChange={changeHandler} placeholder='Enter password' name='password' required />
                    </div>
                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateCustomer