import React, {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Sellerlogin() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const data = {
        email, password
    }

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/sellerlogin')
            .then(res => {
                if(res.data === 'exist'){
                    alert('Login Successfull')
                    navigate('/sellerhomepage')
                }
                else if(res.data === 'notexist'){
                    alert('Records not found')
                    navigate('/')
                }
            })
            .catch(err => {
                alert('Invalid Credientials', err)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Seller Login</h1>
                <div className='input-box'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required />
                </div>
                <div className='input-box'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />
                </div>
                <button type='submit'>Login</button>
                <div className='bottom'>
                    <p>Don't have an account ?</p>
                    <Link to='/sellerregister' className='register-btn'>Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Sellerlogin