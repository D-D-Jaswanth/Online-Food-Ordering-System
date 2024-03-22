import React, { useState } from 'react'
import SellerNavbar from '../components/SellerNavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddItem() {

    const [image, setImage] = useState('')
    const [Itemname, setItemname] = useState('')
    const [Category, setCategory] = useState('')
    const [SubCategory, setSubCategory] = useState('')
    const [Price, setPrice] = useState('')

    const navigate = useNavigate()

    const handleChangeFile = (e) => {
        setImage(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('image', image)
        formData.append('Itemname', Itemname)
        formData.append('Category', Category)
        formData.append('SubCategory', SubCategory)
        formData.append('Price', Price)

        const result = await axios.post('http://localhost:5000/additems', formData,
        {
            headers: {
                "contentType": "multipart/form-data"
            }
        })
        console.log(result)
        if(result.data === "added"){
            alert('Item Added Successfully')
            navigate('/viewitems')
        }
    }

    return (
        <>
        <SellerNavbar />
            <div className='additems-container'>
                <h4>Add Items</h4>
                <form onSubmit={handleSubmit}>
                    <div className='add-container'>
                        <div className='input-box'>
                            <label htmlFor='image'>image</label>
                            <input type="file" id="image" name='image' onChange={handleChangeFile} className="image" placeholder='Enter Item name' accept='image/*'/>
                        </div>
                        <div className='input-box'>
                            <label htmlFor='itemname'>Itemname</label>
                            <input type="text" id="itemname"  onChange={(e) => setItemname(e.target.value)} name='itemname' placeholder='Enter Item name' />
                        </div>
                        <div className='input-box'>
                            <label htmlFor='category'>Categories</label>
                            <select name='category' id='category' onChange={(e) => setCategory(e.target.value)} >
                                <option value='' disabled selected>Select Category</option>
                                <option value='Breakfast'>Breakfast</option>
                                <option value='Main Course'>Main Course</option>
                            </select>
                        </div>
                        <div className='input-box'>
                            <label htmlFor='sub-category'>Sub-Categories</label>
                            <select name='sub-category' onChange={(e) => setSubCategory(e.target.value)} >
                                <option value='' disabled selected>Select Sub-Category</option>
                                <option value='Nonveg-Biryani'>Nonveg-Biryani</option>
                                <option value='Veg Biryani'>Veg Biryani</option>
                                <option value='Pizza'>Pizza</option>
                                <option value='Noodles'>Noodles</option>
                                <option value='Burger'>Burger</option>
                                <option value='Pav Bhaji'>Pav Bhaji</option>
                                <option value='Shakes'>Shakes</option>
                                <option value='Deserts'>Deserts</option>
                                <option value='Dosa'>Dosa</option>
                                <option value='Uttapam'>Uttapam</option>
                                <option value='Chineese'>Chineese</option>
                                <option value='Idli'>Idli</option>
                                <option value='Coffee'>Coffee</option>
                                <option value='Tea'>Tea</option>
                            </select>
                        </div>
                        <div className='input-box'>
                            <label htmlFor='price'>Price</label>
                            <input type="text" id="price"  onChange={(e) => setPrice(e.target.value)} name='price' placeholder='Enter amount' />
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddItem