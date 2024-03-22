import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../components/logos/linkedin-logo.png'
import facebook from '../components/logos/facebook-logo.png'
import twitter from '../components/logos/twitter-logo.png'

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div>
          <h2>Online</h2>
          <h2>Food</h2>
          <h2>Order</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link>Company</Link>
          <Link>About Us</Link>
          <Link>Careers</Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link>Contact Us</Link>
          <Link>Help & Support</Link>
        </div>
        <div className='social-links'>
          <h6>Social Links</h6>
          <Link>
            <img src={linkedin} alt='' />
            <img src={facebook} alt='' />
            <img src={twitter} alt='' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer