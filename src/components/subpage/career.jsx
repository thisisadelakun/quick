import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

const Career = () => {
    return (
        <div className='brand'>
            <Seo
                title="Career - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader9">
                <div className="container">
                    <h1>FUSION CAREERS</h1>
                </div>
            </div>

            <div className="container brandbody newbrandbody" >
                <div className="intership">
                    <h3>INTERNSHIPS</h3>
                    <div className="inters">
                        <h5>
                            SOCIAL VIDEO (INTERNSHIP)
                        </h5>
                        <p>Brand Journalism + Digital Media</p>
                        <p>Salt Lake City, Utah Office</p>
                    </div>

                    <div className="inters">
                        <h5>
                            BRAND JOURNALISM + SOCIAL MEDIA (INTERNSHIP)
                        </h5>
                        <p>Brand Journalism + Digital Media</p>
                        <p>Salt Lake City, Utah Office</p>
                    </div>

                    <div className="inters">
                        <h5>
                            WEB DEVELOPER (INTERNSHIP)
                        </h5>
                        <p>Frontend Web Developer</p>
                        <p>Salt Lake City, Utah Office</p>
                    </div>

                    <div className="inters">
                        <h5>
                            SOCIAL MEDIA MARKETING(INTERNSHIP)
                        </h5>
                        <p>Social Media Marketings</p>
                        <p>Salt Lake City, Utah Office</p>
                    </div>
                </div>
                <div className="intership">
                    <h3>EMPLOYMENT</h3>
                    <div className="emplyment">
                        <h5>
                            SOCIAL VIDEO PRODUCER (FULL-TIME POSITION)
                        </h5>
                        <p>Salt Lake City, Utah Office</p>
                    </div>
                    <div className="emplyment">
                        <h5>
                            SOCIAL MEDIA COORDINATOR (FULL-TIME POSITION)
                        </h5>
                        <p>Salt Lake City, Utah Office</p>
                    </div>
                    <div className="emplyment">
                        <h5>
                            BRANDED CONTENT WRITER + EDITOR (FULL-TIME POSITION)
                        </h5>
                        <p>Salt Lake City, Utah Office</p>
                    </div>
                    <div className="emplyment">
                        <h5>
                            CONTENT CREATOR (FULL-TIME POSITION)
                        </h5>
                        <p>Salt Lake City, Utah Office</p>
                    </div>
                    <div className="emplyment">
                        <h5>
                            SENIOR CONTENT WRITER (FULL-TIME POSITION)
                        </h5>
                        <p>Salt Lake City, Utah Office</p>
                    </div>
                </div>
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

export default Career