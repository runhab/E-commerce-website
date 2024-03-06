import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>

            </div>
            <div className='descriptionbox-description'>
                <p>
                    An e-commerce website is an online platform that facilitates buying and selling of products and services over the internet  serves as a virtual marketplace where businesses and individuals showcase their products ,interact with customers ,and conduct transaction s without the need for a physical presence.
                </p>
                <p>
                    E-commerce websites typically display productsor services a detailed descriptions,images prices and any available variables (a.g sizes,colors).
                </p>

            </div>
        </div>
    )
}
export default DescriptionBox