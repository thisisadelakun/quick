import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

const WebDev = () => {
    return (
        <div className='brand'>
            <Seo
                title="Website Development - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader6">
                <div className="container">
                    <h1>UTAH WEBSITE DEVELOPMENT</h1>
                </div>
            </div>

            <div className="container brandbody">
                <p>
                    Our Webby Award™ winning interactive team is recognized as a creative discipline, which means they are in the brain-storming sessions,
                    continually providing input on how utilizing interactive solutions could solve the client’s problem and better connect the brand to the
                    consumer. <br />
                    We do not farm-out any work to third parties. Our 100% in-house, Interactive Developers are trained in understanding how to create
                    interfaces that are intuitive and invite people in. That could be a mobile experience, a website, e-commerce, a smart phone or tablet
                    application or whatever is next.
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

export default WebDev