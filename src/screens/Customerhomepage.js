import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomerNavbar from '../components/CustomerNavbar'
import { useCart } from './ContextReducer'

function Customerhomepage() {

  const [cart, setCart] = useCart()
  const [item, setItem] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/viewitems')
      .then(item => setItem(item.data))
      .catch(err => console.log(err))
  }, [item])

  return (
    <>
      <CustomerNavbar />
      <div className='customer-page-container'>
        <form>
          <input type='search' onChange={(e) => setSearch(e.target.value)} placeholder='Search here....' />
        </form>
        <div className='customer-container'>
          {
            item.filter(items => {
              return search.toLowerCase() === ''
              ? items
              : items.Itemname.toLowerCase().includes(search);
            }).map((items) => {
              return (

                <div className='card-component'>
                  <img src={`/uploads/${items.image}`} alt='' />
                  <div className='right'>
                    <h5>{items.Itemname}</h5>
                    <p>Price : {items.Price}</p>
                    {/* <select name='qty' style={{height: "30px", width: "60px", borderRadius: "5px", outline: "none"}} onChange={(e) => setQty(e.target.value)}>
                      {
                        Array.from(Array(6), (e, i) => {
                          return (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                          )
                        })
                      }
                    </select> */}
                    <button className='btn btn-primary' 
                    onClick={() => {
                      setCart([...cart, items]);
                      localStorage.setItem('cart', JSON.stringify([...cart ,item]))}}
                    >Add to Cart</button>
                  </div>
                </div>

              )
             })
          }
        </div>
      </div>
    </>
  )
}

export default Customerhomepage