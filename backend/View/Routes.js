const express = require('express')
const router = express.Router()

const middleware = require('../middleware')

const { Signup, Login, AdminSignUp, AdminLogin, SellerSignUp, SellerLogin, 
    UserProfile, ViewCustomers, AddDeliveryBoys, ViewDeliveryBoys, ViewSellers, 
    ViewItems, UserHomePage, DeleteUser, DeleteSeller, CartPage, GetUserCartPage, 
    GetOrders, GetAllOrders, OrderStatus, UpdateOrders,
} = require('../Controller/authController')

// router.get('/demo', demo)

router.post('/signup', Signup )

router.post('/login', Login)

router.post('/adminsignup', AdminSignUp)

router.post('/adminlogin', AdminLogin)

router.post('/sellerregister', SellerSignUp)

router.post('/sellerlogin', SellerLogin)

router.get('/profile', middleware, UserProfile)

router.get('/viewcustomers', ViewCustomers)

router.post('/adddeliveryboys', AddDeliveryBoys)

router.get('/viewdeliveryboys', ViewDeliveryBoys)

router.get('/viewsellers', ViewSellers)

router.get('/viewitems', ViewItems)

router.get('/customerhomepage', UserHomePage)

router.delete('/deletecustomer/:id', DeleteUser)

router.delete('/deleteseller/:id', DeleteSeller)

router.post('/cart', CartPage)

router.get('/cart', middleware, GetUserCartPage)

router.get('/order', GetOrders)

router.get('/viewtrans', GetAllOrders)

router.get('/editorderdetails/:id', OrderStatus)

router.put('/updateorderdetails/:id', UpdateOrders)

module.exports = router