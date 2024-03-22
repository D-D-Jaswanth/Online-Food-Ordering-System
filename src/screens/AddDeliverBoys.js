import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SellerNavbar from '../components/SellerNavbar'

function AddDeliverBoys() {

    const [fullname, setFullname] = useState()
    const [mobilenumber, setMobilenumber] = useState()
    const [age, setAge] = useState()

    let data = {
        fullname, mobilenumber, age
    }

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/adddeliveryboys', data)
                .then(res => {
                    if (res.data === 'exist') {
                        alert('Already Added')
                    }
                    else if (res.data === 'notexist') {
                        alert('Added')
                        navigate('/sellerhomepage')
                    }
                })
                .catch(err => {
                    alert('Something Went Wrong !', err)
                })

        }
        catch (err) {
            alert("Something Went Wrong !")
        }
    }

    return (
        <>
            <SellerNavbar />
            <div className='boys-container'>
                <h4>View Delivery Boys</h4>
                <Link to='/viewdeliveryboys' className='link'>View Delivery Boys</Link>
                <form onSubmit={handleSubmit}>
                    <div className='add-boys-container'>
                        <div className='input-box'>
                            <label htmlFor='fullname'>Full name</label>
                            <input type='text' id='fullname' placeholder='enter full name' name='fullname' onChange={(e) => setFullname(e.target.value)} />
                        </div>
                        <div className='input-box'>
                            <label htmlFor='mobilenumber'>Mobile number</label>
                            <input type='text' id='mobilenumber' placeholder='enter mobile number' name='mobilenumber' onChange={(e) => setMobilenumber(e.target.value)} />
                        </div>
                        <div className='input-box'>
                            <label htmlFor='age'>Age</label>
                            <input type='text' id='age' placeholder='enter age' name='age' onChange={(e) => setAge(e.target.value)} />
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddDeliverBoys