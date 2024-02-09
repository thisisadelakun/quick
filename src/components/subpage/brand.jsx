import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

const Brand = () => {
    return (
        <div className='brand'>
            <Seo
                title="Brand Development - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader">
                <div className="container">
                    <h1>UTAH BRANDING</h1>
                </div>
            </div>

            <div className="container brandbody">
                <p>
                    Our brand-development process is unsurpassed. We not only understand the new business and media climate, we’ve created a custom marketing s
                    ystem purpose-built to help organizations connect their brand with their target consumers.
                </p>
                <p>
                    Within the Power of One Marketing System is a detailed playbook for building the brand and creating remarkable marketing results.
                </p>

                <p>
                    The Power of One is a defined, research-centered approach based on customer psychology, thought-patterns and buying tendencies and how brands
                    can best use this data to connect with their customers. This process is unsurpassed in the industry.
                </p>
            </div>

            <div className="contacts">
                <Contact />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Brand