import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Sellerregister() {

    const [address, setAddress] = useState()
    const [pincode, setPincode] = useState()
    const [city, setCity] = useState()
    const [ownername, setOwnername] = useState()
    const [mobilenumber, setMobilenumber] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const data = {
        address, pincode, city, ownername, mobilenumber, email, password
    }

    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        try{
            axios.post('http://localhost:5000/sellerregister', data)
            .then(res => {
                if(res.data === "exist"){
                    alert("Already have an account")
                }
                else if(res.data === "notexist"){
                    navigate('/sellerhomepage', {state: {id : data }})
                }
            })
            .catch(err => {
                alert('Invalid Credientials')
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='body'>
            <div className='seller-register'>
                <form onSubmit={handleChange}>
                    <h1>patner With us</h1>
                    <div className='top-register'>

                        <div className='input-box'>
                            <input type='text' name="address" onChange={(e) => setAddress(e.target.value)} placeholder='Full address' required />
                        </div>

                        <div className='top'>
                            <div className='input-box'>
                                <input type='number' name="pincode" onChange={(e) => setPincode(e.target.value)} placeholder='Zip Code' required />
                            </div>
                            <div className='input-box'>
                                <input type='text' name="city" onChange={(e) => setCity(e.target.value)} placeholder='City/Town' required />
                            </div>
                        </div>

                    </div>
                    <div className='middle-register'>

                        <div className='middle'>
                            <div className='input-box'>
                                <input type='text' name="ownername" onChange={(e) => setOwnername(e.target.value)} placeholder='Owner name' required />
                            </div>
                            <div className='input-box'>
                                <input type='number' name="mobilenumber" onChange={(e) => setMobilenumber(e.target.value)} placeholder='Enter mobile number' required />
                            </div>
                        </div>

                        <div className='input-box'>
                            <input type='email' name="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' required />
                        </div>

                    </div>
                    <div className='input-box'>
                        <input type='password' name="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' required />
                    </div>

                    <button type='submit'>Login</button>

                    <div className='bottom'>
                        <p>have an account ?</p>
                        <Link to='/sellerlogin' className='login-btn'>Login</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Sellerregister