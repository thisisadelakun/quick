import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import salt from '../../assets/fusion-maps-utah.jpg'
import ohio from '../../assets/fusion-maps-ohio.jpg'

const Footer = () => {
    return (
        <div className='footer_col'>
            <div className="footer_up">
                <div className='container'>
                    <p>
                        PHONE: <a href="tel:+18016191919">801.619.1919</a> <br />
                        NEW BUSINESS + GENERAL INQUIRIES: <a href="mailto:INFO@FUSION360STUDIOS.COM">INFO@FUSION360STUDIOS.COM </a><br />
                        CAREERS: <a href="http://NEWGIG@FUSION360STUDIOS.COM" target="_blank" rel="noopener noreferrer">NEWGIG@FUSION360STUDIOS.COM</a> <br />
                    </p>
                </div>

                <div className='mapss container'>
                    <div>
                        <div>
                            <h6>SALT LAKE CITY, UTAH</h6>
                        </div>
                        <div className='innermap'>
                            <img className='img-fluid' width={300} src={salt} alt="" />
                            <p>13961 S. Minuteman Dr. Suite 105 Draper, UT 84020</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h6>COLUMBUS, OHIO</h6>
                        </div>
                        <div className='innermap'>
                            <img className='img-fluid' width={300} src={ohio} alt="" />
                            <p>600 Morrison Road Columbus, Ohio 43230</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_below">
                <div className="container">
                    <small>© 2024 Fusion 360</small> | <Link to="/privacy-policy" >Privacy Policy .</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer