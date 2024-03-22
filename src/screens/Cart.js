import React, { useContext, useState, useEffect } from 'react'
import { store } from '../App'
import CustomerNavbar from '../components/CustomerNavbar'
import { useCart } from './ContextReducer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Cart() {

  const [cart, setCart] = useCart()

  const [token, setToken] = useContext(store)
  const [data, setData] = useState(null)

  const navigate = useNavigate()

  const removeCartItem = (pid) => {
    try {
      const myCart = [...cart]
      let index = myCart.findIndex(item => item._id === pid)
      myCart.splice(index, 1)
      setCart(myCart);
      localStorage.setItem('cart', JSON.stringify(myCart))
    }
    catch (err) {
      console.log(err)
    }
  }

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        return (
          total = total + item.Price
        )
      })
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      })
    }
    catch (err) {
      console.log(err)
    }
  }


  const handlePayment = async (req, res) => {
    try {
      await axios.post('http://localhost:5000/cart', { cart, data })
      localStorage.removeItem('cart')
      setCart([])
      navigate('/order')
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    axios.get('http://localhost:5000/cart', {
      headers: {
        'x-token': token
      }
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [token])


  return (
    <>
      <CustomerNavbar />
      <div className='cart-container'>

        <h3><>My Cart</></h3>
        <h4><center>{cart?.length ? `You have ${cart.length} items in your cart` : `You Cart is Empty`}</center></h4>
        {/* <br /> */}
        <div className='cart-box'>
          <div className='cart-box-container'>
            {/* <h5>My Cart</h5> */}
            
            <div className='cart-list'>
              {
                cart.map((item) => {
                  return (

                    <div className='cart-card-content'>
                      <img src={`/uploads/${item.image}`} alt={item.Itemname} />
                      <div className='cart-container-right'>
                        <h4>{item.Itemname}</h4>
                        <h6>Price : {item.Price}</h6>
                        <div className='btn-remove'>
                          <button className='btn btn-danger' onClick={() => removeCartItem(item._id)}>Remove</button>
                        </div>
                      </div>
                    </div>

                  )
                })
              }
            </div>
          </div>
          <div className='cart-box-checkout'>
            <h5>Cart Summary</h5>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total : {totalPrice()}</h4>
            {/* {
              data ? <p>{data._id}</p> : <p>Please Try Again Later</p>
            } */}

            <button onClick={handlePayment}>Make Payment</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart