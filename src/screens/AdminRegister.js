import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function AdminRegister() {

    // const [data, setData] = useState({
    //     email: '',
    //     password: ''
    // })
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    // const changeHandler = e => {
    //     setData({ ...data, [e.target.name]: e.target.value })
    // }

    async function handlesubmit(e) {
        e.preventDefault();

        try{
            await axios.post('http://localhost:5000/adminsignup', {email, password})
            .then(res => {
                if(res.data == "exist"){
                    alert("Admin already Exist ! Please Login")
                    // navigate('/adminlogin')
                }
                else if(res.data == "notexist"){
                    navigate('/adminhomepage', {state: {id:email}})
                }
            })
            .catch(err => {
                alert("Invalid Credientials", err)
            })
        }
        catch(err){
            console.log(err)
        }
        // axios.post('http://localhost:5000/adminsignup', data)
        // .then(result => {
        //     alert(result.data)

        //     navigate('/adminlogin')
        // })
        // .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='register'>
                <form action='POST' onSubmit={handlesubmit}>
                    <h1>Admin Register</h1>
                    {/* <div className='input-box'>
                        <input type='text' onChange={changeHandler} placeholder='Enter full name' name='fullname' required />
                    </div>
                    <div className='input-box'>
                        <input type='number' onChange={changeHandler} placeholder='Enter Phone number' name='phonenumber' required />
                    </div> */}
                    <div className='input-box'>
                        <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' name='email' required />
                    </div>
                    <div className='input-box'>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' name='password' required />
                    </div>
                    <button type='submit'>Login</button>
                    <div className='bottom'>
                        <p>have an account ?</p>
                        <Link to='/adminlogin' className='login-btn'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminRegister