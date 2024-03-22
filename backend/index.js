const express = require('express')
const cors = require('cors')
const multer = require('multer')



const routes = require('./View/Routes')

// Schemas

const AddItem = require('./Model/AddItemSchema')

const app = express();
app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(routes)

const port = 5000;

app.listen(port, () => {
    console.log(`Port Listen ${port}`)
})
const mongoDB = require('./mongo')
mongoDB();

//Add Items

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../public/uploads/')
    },
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now()
        callback(null, uniqueSuffix + file.originalname);
    }
})

const upload = multer({ storage: storage })

app.post('/additems', upload.single('image'), async (req, res) => {

    const image = req.file.filename
    const Itemname = req.body.Itemname
    const Category = req.body.Category
    const SubCategory = req.body.SubCategory
    const Price = req.body.Price

    try {

        await AddItem.create({
            image: image, Itemname: Itemname,
            Category: Category, SubCategory: SubCategory, Price: Price
        })
        res.status(200).send('added')

    }
    catch (err) {

        res.status(500).send('Error')

    }
})