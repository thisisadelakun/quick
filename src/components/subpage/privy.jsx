import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

const Privy = () => {
    return (
        <div className='brand'>
            <Seo
                title="Privacy - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="brandheader10">
                <div className="container">
                    <h1>PRIVACY POLICY</h1>
                </div>
            </div>

            <div className="container brandbody">
                <p>
                    This Privacy Policy governs the manner in which Fusion 360 collects, uses, maintains and discloses information collected from users
                    (each, a “User”) of our website. This privacy policy applies to the Site and all products
                    and services offered by Fusion 360.
                </p>

                <h6>Personal identification information</h6>
                <p>
                    We may collect personal identification information from Users in a variety of ways in connection with activities, services, features or
                    resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information
                    from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information,
                    except that it may prevent them from engaging in certain Site related activities.
                </p>

                <h6>Non-personal identification information</h6>
                <p>
                    We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal
                    identification information may include the browser name, the type of computer and technical information about Users
                    means of connection to our Site, such as the operating system and the Internet service providers utilized and other
                    similar information.
                </p>

                <h6>Web browser cookies</h6>
                <p>
                    Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping
                    purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert
                    you when cookies are being sent. If they do so, note that some parts of the Site may not function properly. The Fusion 360
                    website uses cookies, tracking pixels and related technologies. Cookies are small data files that are served by our
                    platform and stored on your device. Our site uses cookies dropped by us or third parties for a variety of purposes
                    including to operate and personalize the website. Also, cookies may also be used to track how you use the site to
                    target ads to you on other websites.
                </p>

                <h6>How we use collected information</h6>
                <p>
                    Fusion 360 may collect and use Users personal information for the following purposes:
                </p>
                <ul>
                    <li>
                        – To improve customer service <br />
                        Information you provide helps us respond to your customer service requests and support needs more efficiently.
                    </li> <br />
                    <li>
                        - To personalize user experience
                        We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
                    </li> <br />
                    <li>
                        – To improve our Site
                        We may use feedback you provide to improve our products and services.
                    </li>
                </ul>

                <h6>How we protect your information</h6>
                <p>
                    We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized
                    access, alteration, disclosure or destruction of your personal information, username, password, transaction information and
                    data stored on our Site.
                </p>

                <h6>Sharing your personal information</h6>
                <p>
                    We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized
                    access, alteration, disclosure or destruction of your personal information, username, password, transaction information and
                    data stored on our Site.
                </p>

                <h6>Changes to this privacy policy</h6>
                <p>
                    Fusion 360 has the discretion to update this privacy policy at any time. When we do, we will revise the updated date
                    at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about
                    how we are helping to protect the personal information we collect. You acknowledge and agree that it is your
                    responsibility to review this privacy policy periodically and become aware of modifications.
                </p>

                <h6>Your acceptance of these terms</h6>
                <p>
                    By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site.
                    Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
                </p>

                <h6>Contacting us</h6>
                <p>
                    If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <br />
                    Fusion 360
                </p> <br />

                <p>
                    1434 E 4500 S
                </p> <br />

                <p>
                    Salt Lake City UT 84117 <br />
                    info@fusion360studios.com
                </p> <br />

                <p>
                    This document was last updated December 2020.
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

export default Privy