import React, {useState, useContext} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../App'

const Login = () => {

    const [token, setToken] = useContext(store)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const changeHandler = e => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login',data)
        .then(res => {
            setToken(res.data.token)
            alert("Login Successfully")
        })
        .catch(err => console.log(err))
    }

    if(token){
        return navigate('/customerhomepage')
    }

    return (
        <div className='login'>
            <form onSubmit={handlesubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name="email" onChange={changeHandler} placeholder='Enter Email' required />
                </div>
                <div className='input-box'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name="password" onChange={changeHandler}  placeholder='Enter Password' required />
                </div>
                <button type='submit'>Login</button>
                <div className='bottom'>
                    <p>Don't have an account ?</p>
                    <Link to='/signup' className='register-btn'>Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login