import React from 'react'
import image1 from '../components/images/img1.jpg'

function Header() {
    return (
        <header>
            <img src={image1} alt='' />
            <div className='text'>
                <h2>Order Food</h2>
                <h2>Online</h2>
            </div>
        </header>
    )
}

export default Header