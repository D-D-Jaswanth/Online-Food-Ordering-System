const express = require('express')

const jwt = require('jsonwebtoken')

const demo = (req, res) => {
    res.send('Hello World !')
}

const CustomerSchema = require('../Model/CustomerSchema')
const AdminSchema = require('../Model/AdminSchema')
const SellerSchema = require('../Model/SellerSchema')
const AddDeliverBoysSchema = require('../Model/AddDeliveryBoys')
const AddItem = require('../Model/AddItemSchema')
const OrderSchema = require('../Model/OrderSchema')

const Signup = async (req, res) => {

    try {
        const { fullname, phonenumber, email, password } = req.body;
        let exist = await CustomerSchema.findOne({ email: email })
        if (exist) {
            return res.status(400).send("User Already Exist")
        }
        let newUser = new CustomerSchema({
            fullname,
            phonenumber,
            email,
            password
        })
        await newUser.save()
        res.status(200).send("Register Successfully")
    }
    catch (err) {
        return res.status(400).send("Internal Server Error")
    }
}

const Login = async (req, res) => {

    try {
        const { email, password } = req.body;
        let exist = await CustomerSchema.findOne({ email });
        if (!exist) {
            return res.status(400).send("User Not Found")
        }
        if (exist.password !== password) {
            return res.status(400).send("Invalid Credentials")
        }

        let payload = {
            user: {
                id: exist.id
            }
        }

        jwt.sign(payload, 'jwtSecret',

            (err, token) => {
                if (err) throw err
                return res.json({ token })
            }
        )
    }

    catch (err) {
        return res.status(400).send("Internal Server Error")
    }

}

const AdminSignUp = async (req, res) => {

    const { email, password } = req.body;

    const data = {
        email: email,
        password: password
    }
    try {
        let exist = await AdminSchema.findOne({ email: email })

        if (exist) {
            res.json('exist')
        }
        else {
            res.json('notexist')
            await AdminSchema.insertMany([data])
        }
    }
    catch (err) {
        res.json('Something Went Wrong !')
    }
}

const AdminLogin = async (req, res) => {

    const { email, password } = req.body;
    try {
        let exist = await AdminSchema.findOne({ email: email })

        if (exist) {
            res.json('exist')
        }
        else {
            res.json('notexist')
        }
    }
    catch (err) {
        res.json('Something Went Wrong !')
    }
}

const SellerSignUp = async (req, res) => {

    const { ownername, mobilenumber, email, password, address, pincode, city } = req.body

    const data = {
        ownername, mobilenumber, email, password, address, pincode, city
    }

    try {

        let exist = await SellerSchema.findOne({ email: email })
        if (exist) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await SellerSchema.insertMany([data])
        }

    }
    catch (err) {
        res.json("Something went wrong !")
    }

}

const SellerLogin = async (req, res) => {

    const { email, password } = req.body
    try {
        let exist = await SellerSchema.find({ email: email })
        if (exist) {
            res.json('exist')
        }
        else {
            res.json('notexist')
        }

    }
    catch (err) {
        res.json('Something went wrong')
    }
}

const UserProfile = async (req, res) => {
    try {
        let exist = await CustomerSchema.findById(req.user.id)
        if (!exist) {
            return res.status(400).send("User not found")
        }
        res.json(exist)
    }
    catch (err) {
        return res.status(500).send("Server Error")
    }
}

const ViewCustomers = (req, res) => {
    CustomerSchema.find()
        .then((customers) => {
            res.json(customers)
        })
        .catch((err) => {
            res.json(err)
        })
}

const AddDeliveryBoys = async (req, res) => {

    const { fullname, mobilenumber, age } = req.body

    const data = {
        fullname, mobilenumber, age
    }

    try {
        let exist = await AddDeliverBoysSchema.findOne({ fullname })

        if (exist) {
            res.json('exist')
        }
        else {
            res.json('notexist')
            await AddDeliverBoysSchema.insertMany([data])
        }

    }
    catch (err) {
        console.log(err)
    }
}

const ViewDeliveryBoys = (req, res) => {
    AddDeliverBoysSchema.find()
        .then(boys => res.json(boys))
        .catch(err => res.json(err))
}

const ViewSellers = (req, res) => {
    SellerSchema.find()
        .then(sellers => res.json(sellers))
        .catch(err => console.log(err))
}

const ViewItems = (req, res) => {
    AddItem.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
}

const UserHomePage = (req, res) => {
    AddItem.find()
        .then(item => res.json(item))
        .catch(err => console.log(err))
}

const DeleteUser = (req, res) => {
    const id = req.params.id;
    CustomerSchema.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => console.log(err))
}

const DeleteSeller = (req, res) => {
    const id = req.params.id;
    SellerSchema.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => console.log(err))
}

const CartPage = async (req, res) => {
    try {
        const { cart } = req.body;
        const { data } = req.body;

        let total = 0;
        cart.map((i) => {
            total += i.Price;
        });
        const order = new OrderSchema({
            Products: cart,
            Users: data._id,
        })
        order.save()
        res.status(200).send('Order Placed')
    }
    catch (err) {
        console.log(err)
    }
}

const GetUserCartPage = async (req, res) => {
    try {
        let exist = await CustomerSchema.findById(req.user.id)
        if (!exist) {
            return res.status(400).send("User not found")
        }
        res.json(exist)
    }
    catch (err) {
        return res.status(500).send("Server Error")
    }
}

const GetOrders = (req, res) => {
    OrderSchema.find().populate("Users", "fullname").populate("Products", "-photo")
        .then(orders => res.json(orders))
        .catch(err => console.log(err))
}

const GetAllOrders = (req, res) => {
    OrderSchema.find({})
        .populate("Users", "fullname")
        .populate("Products", "-photo")
        .sort({ createdAt: -1 })
        .then(orders => res.json(orders))
        .catch(err => console.log(err))
}

const OrderStatus = (req, res) => {
    const id = req.params.id;
    OrderSchema.findById({ _id: id })
        .populate("Users", "fullname")
        .populate("Products", "-photo")
        .then(orders => {
            res.json(orders)
        })
        .catch(err => {
            res.json(err)
        })
}

const UpdateOrders = (req, res) => {
    const id = req.params.id
    OrderSchema.findByIdAndUpdate({ _id: id }, { status: req.body.status })
        .then(orders => {
            res.json(orders)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = {
    Signup, Login, AdminSignUp, AdminLogin, SellerSignUp, SellerLogin,
    UserProfile, ViewCustomers, AddDeliveryBoys, ViewDeliveryBoys,
    ViewSellers, ViewItems, UserHomePage, DeleteUser, DeleteSeller,
    CartPage, GetUserCartPage, GetOrders, GetAllOrders, OrderStatus,
    UpdateOrders
}