import React, {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Adminlogin() {

    // const [data, setData] = useState({
    //     email: '',
    //     password: ''
    // })

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    // const changeHandler = e => {
    //     setData({...data, [e.target.name] : e.target.value})
    // }

    async function handlesubmit(e) {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/adminlogin', {email, password})
            .then(res => {
                if(res.data == "exist"){
                    alert("Login Successfully")
                    navigate('/adminhomepage', {state:{id:email}})
                }
                else if(res.data == "notexist"){
                    alert('Admin not Found')
                    navigate('/')
                }
            })
            .catch(err => {
                alert("Invalid Credientials", err)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='login'>
            <form onSubmit={handlesubmit}>
                <h1>Admin Login</h1>
                <div className='input-box'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required />
                </div>
                <div className='input-box'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />
                </div>
                <button type='submit'>Login</button>
                {/* <div className='bottom'>
                    <p>Don't have an account ?</p>
                    <Link to='/adminsignup' className='register-btn'>Register</Link>
                </div> */}
            </form>
        </div>
    )
}

export default Adminlogin