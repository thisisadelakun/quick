import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

const Measure = () => {
    return (
        <div className='brand'>
            <Seo
                title="Measurement + Analytics - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader8">
                <div className="container">
                    <h1>MEASUREMENT + ANALYTICS</h1>
                </div>
            </div>

            <div className="container brandbody">
                <p>
                    There are two magic words in business: Accountability and Measure. Where there is accountability, things get done and what gets measured,
                    creates accountability. When it comes to being accountability, it’s a numbers game (measure), and we like it that way. <br />
                    We provide in-depth acumen across all of paid, earned and owned media, insight that goes way beyond traditional website analytics, to
                    show you what’s working, what’s not and how to best improve. Our detailed weekly analysis will show you if you are over or under investing
                    and how to best allocate funds to maximize ROI.
                </p>
                <p>
                    This results in an intelligent media strategy that is highly optimized, delivering more revenue with greater ROI.
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

export default Measure