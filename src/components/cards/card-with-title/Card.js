import React from 'react'
import './Card.css'
const Card =()=>{
    return(
        <div className='container-fluid row'>
            <div className='col-4 d-flex justify-content-center align-items-center card'>
                <img src={require('../../../constant/images/ads.svg')} alt='ads_image'/>
                <h4>برمجة موقع نمو المنشأت</h4>
            </div>
        </div>
    )
}
export default Card