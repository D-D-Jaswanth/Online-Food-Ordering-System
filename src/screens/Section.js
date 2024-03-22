import React from 'react'
import imageBiriyani from '../components/images/biriyani.png'
import imagePizza from '../components/images/pizza.png'
import imageDosa from '../components/images/dosa.png'
import imageBurger from '../components/images/burger.png'
import imageNoodles from '../components/images/noodles.png'

function Section() {
  return (
    <section>
        <h2>Search By Category</h2>
        <div className='section-container'>
            <div className='card-content'>
                <img src={imageBiriyani} alt='Biriyani' />
                <h5>Biriyani</h5>
            </div>
            <div className='card-content'>
                <img src={imagePizza} alt='Biriyani' />
                <h5>Pizza</h5>
            </div>
            <div className='card-content'>
                <img src={imageDosa} alt='Biriyani' />
                <h5>Dosa</h5>
            </div>
            <div className='card-content'>
                <img src={imageBurger} alt='Biriyani' />
                <h5>Burger</h5>
            </div>
            <div className='card-content'>
                <img src={imageNoodles} alt='Biriyani' />
                <h5>Chineese</h5>
            </div>
        </div>
    </section>
  )
}

export default Section