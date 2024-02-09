import React from 'react'
import './subpage.css'
import Contact from '../../hooks/contactform/Contact'
import Footer from '../../hooks/footer/Footer'
import NavBar from '../../hooks/navbar/NavBar'
import Seo from '../../hooks/seo/Seo'

import awardee from '../../assets/awardee-mobile.png'
import awardeee from '../../assets/awards-slide-winner-badges.png'
import fistplay from '../../assets/award-bg.jpg'
import derby from '../../assets/debry.jpg'
import etw from '../../assets/etw.jpg'
import derby2 from '../../assets/debry2.jpg'
import femi from '../../assets/femininity-1.jpg'
import reelz from '../../assets/reel.jpg'
import peterbit from '../../assets/peterbilt.jpg'
import wasatch from '../../assets/wasatch.jpg'
import brunos from '../../assets/bruno.jpg'
import enium from '../../assets/enium.jpg'
import { FaPlayCircle } from "react-icons/fa";
import nom from '../../assets/emmy-nominee.png'

const Ourvideo = () => {
    return (
        <div className='newbrand'>
            <Seo
                title="Video Production - Fusion 360"
                description="Fusion 360"
                name="Fusion 360"
                type="Website"
            />

            <div className='navbrand'>
                <NavBar />
            </div>
            <div className="videohad">
                <div className="container">
                    <h1>FUSION 360 STUDIOS</h1>
                </div>

                <div className='container'>
                    <img src={fistplay} alt="" width={600} className='img-fluid' />
                </div>
            </div>

            <div className="awarded-col">
                <div className="brandheader7">
                    <div className="container">
                        <h1>AWARD WINNING VIDEO PRODUCTION</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="mobileonly awarded-con">
                        <img src={awardee} alt="" width={300} className='img-fluid' />
                    </div>
                    <div className="desktoponly awarded-con">
                        <img src={awardeee} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>

            <div className="branded">
                <div className="container brandbody">
                    <h4>
                        FUSION 360 STUDIOS IS OUR STATE-OF-THE-ART DIGITAL VIDEO PRODUCTION FACILITY.
                    </h4>
                    <h5>
                        Because we are a full-service digital advertising agency, we approach each video production project through our strategic
                        brand messaging mind-set. This approach leads to award-winning video production, that connects with the audience,
                        delivering a return on investment.
                    </h5>
                </div>

            </div>

            <div className="checkouts">
                <div className="chkout">
                    <div className="container">
                        <h1>
                            CHECK OUT OUR WORK.
                        </h1>
                    </div>
                </div>

                <div className="videolisting">
                    <div className='vidolisting container'>
                        <div className="videolists">
                            <a href="https://vimeo.com/170093940?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={wasatch} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>Wasatch Academy | “We Are All Explorers” | Internet Video</p>
                                            <img src={nom} alt="" width={70} />
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>

                        <div className="videolists">
                            <a href="https://vimeo.com/113139593?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={reelz} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>Fusion 360 | “The Factory” | Demo Reel</p>
                                            <img src={nom} alt="" width={70} />
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>

                        <div className="videolists">
                            <a href="https://vimeo.com/282049858?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={derby2} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>Robert DeBry and Associates | “Red Light” | TV Spot</p>
                                            <img src={nom} alt="" width={70} />
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="videolists">
                            <a href="https://vimeo.com/282047532?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={derby} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>Robert DeBry | “Shania” | TV Spot</p>
                                            <img src={nom} alt="" width={70} />
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="videolists">
                            <a href="https://vimeo.com/187900326?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={etw} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>End Text Wrecks | “The End is Coming” | Internet Video</p>
                                            <img src={nom} alt="" width={70} />
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="videolists">
                            <a href="https://vimeo.com/282037997?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={brunos} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>Robert DeBry and Associates | “Bruno” | Tv Spot</p>
                                            <img src={nom} alt="" width={70} />
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="videolists">
                            <a href="https://vimeo.com/341655556/a1e1c2ca50?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={enium} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>Enium | “Energy Revolution” | Motion Graphics Video</p>
                                            <img src={nom} alt="" width={70} />
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="videolists">
                            <a href="https://vimeo.com/239734657?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={femi} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>Femininity | “The New Sexy” | Internet Video</p>
                                            <img src={nom} alt="" width={70} />
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>
                        <div className="videolists">
                            <a href="https://vimeo.com/191239182?width=1280&height=720" target='_blank' className='vidia'>
                                <div className="vidimage">
                                    <div className="viditext">
                                        <img src={peterbit} alt="" className='img-fluid' />
                                        <div className="vidistext">
                                            <p>Peterbilt | “The Legend Continues” | National TV Spot</p>
                                        </div>
                                    </div>
                                    <FaPlayCircle className="custom-play-icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container what_we-do" >
                    <p>WHAT WE DO:</p>
                    <ul>
                        <li>• RED DIGITAL CINEMA</li>
                        <li>• 4K VIDEO</li>
                        <li>• 4K VIDEO</li>
                        <li>• LIVE-ACTION VIDEO</li>
                        <li>• CG MOTION-GRAPHICS ANIMATION</li>
                        <li>• 3D ANIMATION</li>
                        <li>• 2D EDITING</li>
                        <li>• COLOR CORRECTION</li>
                        <li>• SOUND DESIGN</li>
                        <li>• MULTI-MEDIA DESIGN</li>
                    </ul>
                </div>
            </div>

            <div className="chkout">
                <xdiv className="container">
                    <h4>
                        Strategy + Creativity + Results
                    </h4>
                </xdiv>
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

export default Ourvideo