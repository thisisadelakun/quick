import React from 'react'
import loading from '../../assets/Fusion360-email-logo.png'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loaders'>
      <div className="indicator">
        <img src={loading} alt="fusion_loader" />
      </div>
    </div>
  )

}

export default Loader