import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

    const [data , setData] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const changeHandler = e => {
        setData({...data, [e.target.name] : e.target.value})
    }


    const handlesubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup', data)
        .then(result => {
            alert(result.data)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (

        <div>
            <div className='register'>
                <form action='POST' onSubmit={handlesubmit}>
                    <h1>Register</h1>
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
                    <button type='submit'>Login</button>
                    <div className='bottom'>
                        <p>have an account ?</p>
                        <Link to='/login' className='login-btn'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register