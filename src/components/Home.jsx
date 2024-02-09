import React from 'react'
import Seo from '../hooks/seo/Seo'
import NavBar from '../hooks/navbar/NavBar'
import Footer from '../hooks/footer/Footer'
import playfusion from '../assets/fusion-play.jpg'
import awardee from '../assets/awardee-mobile.png'
import awardeee from '../assets/awards-slide-winner-badges.png'
import playawardee from '../assets/award-bg.jpg'
import playawardeee from '../assets/Fusion-Octopus-Video-.png'
import octopus from '../assets/fusion-octopus-12.13.png'
import Services from './services/Services'
import Casestudies from './casestudies/Casestudies'
import Marquee from '../hooks/marquee/Marquee'
import Contact from '../hooks/contactform/Contact'

const Home = () => {
    return (
        <div className='fusion-home'>
            <Seo
                title="Home | Fusion360"
                description="THE BEST DIGITAL ADVERTISING AGENCY. PERIOD."
                name="TO DO APP"
                type="website"
            />
            <div className="fusion-header">
                <div>
                    <NavBar />
                </div>
                <div className='container'>
                    <h1>THE BEST DIGITAL ADVERTISING AGENCY. PERIOD.</h1>
                </div>

                <div className='container fusion-play'>
                    <div>
                        <img src={playfusion} alt="" className='img-fluid' width={600} />
                    </div>
                    <div className="btn-view">
                        <button>
                            VIEW CAPABILITIES  +  CASE STUDIES
                        </button>
                    </div>
                </div>
            </div>

            <div className="awarded-col">
                <div className="container">
                    <h2>THE MOST-AWARDED DIGITAL AGENCY.</h2>
                    <h5>CONTINUALLY RECOGNIZED AS THE BEST AND MOST CREATIVE DIGITAL MARKETING AGENCY.</h5>
                </div>

                <div className="container">
                    <div className="mobileonly awarded-con">
                        <img src={awardee} alt="" width={300} className='img-fluid' />
                    </div>
                    <div className="desktoponly awarded-con">
                        <img src={awardeee} alt="" className='img-fluid' />
                    </div>
                </div>

                <div className="container">
                    <div className="mobileonly awarded-con">
                        <img src={playawardee} alt="" width={300} className='img-fluid' />
                    </div>
                    <div className="desktoponly awarded-con">
                        <img src={playawardeee} alt="" className='img-fluid' width={600} />
                    </div>
                </div>

                <div className="container btn-view">
                    <button>VIEW OUR REEL</button>
                </div>
            </div>

            <div className="insidefactory">
                <div className="insidefactory-col">
                    <div className="container">
                        <h1>INSIDE THE FACTORY</h1>
                        <h4>Build a brand, start a movement.</h4>
                    </div>
                    <div className="container btn-view">
                        <button>VIEW OUR WORK</button>
                    </div>
                </div>
            </div>

            <div className="aboutus">
                <div className="aboutheader">
                    <div className='container aboutus-txt'>
                        <h3>ABOUT</h3><span>.</span>
                    </div>
                </div>

                <div className="aboutbody">
                    <div className='container aboutbody-txt'>
                        <p>
                            Located in the shadows of the Wasatch Mountains in Salt Lake City, Utah, Fusion 360 is a next-generation digital marketing agency,
                            serving up more hot digital sustenance than Satan's Sous Chef.
                        </p> <br />
                        <p>
                            We develop award-winning digital marketing strategies for local and regional companies and brands. Think Yoda in Chucks.
                        </p> <br />
                        <p>
                            We are Fusion 360. We are the agency for the digital revolution.
                        </p> <br /> <br />

                        <div className="about-img">
                            <img src={octopus} alt="" className='img-fluid' width={250} />
                        </div>
                    </div>

                </div>

                <div className="award-winning">
                    <div className="award-winning-col">
                        <h1>AWARD WINNING, EFFECTIVE MARKETING</h1>
                    </div>
                </div>
            </div>

            <div className="services" id="services">
                <div className="container services-txt">
                    <h3>SERVICES</h3><span>.</span>
                </div>
            </div>

            <div>
                <Services />
            </div>

            <div className="case">
                <div className="container case-txt">
                    <h3>CASE STUDIES</h3><span>.</span>
                </div>

                <div className="case-video">
                    <div className="case-img container">
                        <img src={playfusion} alt="" className='img-fluid' width={600} />
                    </div>
                </div>

                <div className="btn-view2">
                    <button>
                        VIEW CAPABILITIES  +  CASE STUDIES
                    </button>
                </div>

                <div className="cased">
                    <Casestudies />
                </div>
            </div>

            <div className="numbers">
                <div className="container case-txt">
                    <h3>BY THE NUMBERS</h3><span>.</span>
                </div>

                <div className='marquees'>
                    <Marquee />
                </div>

                <div className="renegade">
                    <div className="container">
                        <h1>BE A RENEGADE</h1>
                        <h5>The Face Of Innovation</h5>
                    </div>
                </div>
            </div>

            <div className="services" id='contacts'>
                <div className="container services-txt">
                    <h3>CONTACT</h3><span>.</span>
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

export default Home