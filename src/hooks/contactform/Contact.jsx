import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'
import cell from '../../assets/1287520_mobile_call_cell_iphone_phone_icon.svg'
import { TfiYoutube, TfiLinkedin, TfiFacebook } from "react-icons/tfi";
import { IoLogoVenmo } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className=' contact__col'>
            <img className='img-fluid' src={cell} alt="" width={90} />
            <h4>Contact Fusion 360</h4>
            <div className='mediaicon'>
                <FaTwitter />
                <TfiFacebook />
                <IoLogoVenmo />
                <TfiLinkedin />
                <TfiYoutube />
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact