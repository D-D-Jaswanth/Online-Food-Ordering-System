import React from 'react'
import { useLocation } from 'react-router-dom'

function Sellerprofile() {

    const location = useLocation()

    return (
        <>
            <div className='seller-profile'>
                <h2>Profile</h2>
                <from>
                    <div className='seller-profile-container'>
                        <div class="seller-input">
                            <div class="input-box">
                                <label>Owner name</label>
                                <input type="text" placeholder="owner name" />
                            </div>
                            <div class="input-box">
                                <label>Mobile Number</label>
                                <input type="number" placeholder="mobile number" />
                            </div>
                        </div>
                        <div class="seller-input">
                            <div class="input-box">
                                <label>Email</label>
                                <input type="text" placeholder="email" />
                            </div>
                            <div class="input-box">
                                <label>Address</label>
                                <input type="text" placeholder="address" />
                            </div>
                        </div>
                        <div class="seller-input">
                            <div class="input-box">
                                <label>Pincode</label>
                                <input type="number" placeholder="pincode" />
                            </div>
                            <div class="input-box">
                                <label>City/Town</label>
                                <input type="text" placeholder="city/town" />
                            </div>
                        </div>
                        <div class="seller-input">
                            <div class="input-box">
                                <label>Password</label>
                                <input type="password" placeholder="password" />
                            </div>
                        </div>
                        <button>Update</button>
                    </div>
                </from>
            </div>

        </>
    )
}

export default Sellerprofile