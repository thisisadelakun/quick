import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Services.css'
import fuslog from '../../assets/Fusion360-email-logo.png'
import brands from '../../assets/3688483_bar_chart_graph_analysis_analytics_icon.svg'
import content from '../../assets/3688512_announce_announcement_bullhorn_sound_loud_icon.svg'
import search from '../../assets/3688454_find_lens_search_magnifier_magnifying_icon.svg'
import message from '../../assets/3688468_chat_message_send_text_bubble_icon.svg'
import card from '../../assets/3688508_card_credit_debit_payment_atm_icon.svg'
import dev from '../../assets/3688496_computer_desktop_electronics_imac_business_icon.svg'
import video from '../../assets/3688472_depth_interface_layer_layers_sheets_icon.svg'
import measure from '../../assets/3688424_activity_feed_health_timeline_care_icon.svg'
import { IoIosCall, IoMdMail } from "react-icons/io";

const Services = () => {
    const navigate = useNavigate();

    const handleLearnMoreClickBrand = () => {
        navigate('/utah-branding-agencies');
    };

    const handleLearnMoreClickMarket = () => {
        navigate('/content-marketing-companies-utah');
    };

    const handleLearnMoreClickSearchOps = () => {
        navigate('/seo-marketing-companies-utah');
    };

    const handleLearnMoreClickSocial = () => {
        navigate('/utah-social-media-agencies');
    };

    const handleLearnMoreClickPayPer = () => {
        navigate('/utah-ppc-agencies');
    };

    const handleLearnMoreClickWebDev = () => {
        navigate('/website-design-companies-utah');
    };

    const handleLearnMoreClickMeasure = () => {
        navigate('/measurement-analytics');
    };

    const handleLearnMoreClickVideo = () => {
        navigate('/video-production-companies-utah');
    };

    return (
        <div className='service-col'>
            <div className="container service-box">
                <div className='service-boxes'>
                    <div className='service_icon'>
                        <img src={brands} alt="" width={58} className='img-fluid' />
                    </div>
                    <div className='service_txt'>
                        <p>Brand Development</p>
                        <small>
                            We've created a custom marketing system purpose-built to help organizations connect their brand with their target.
                        </small>
                    </div>
                    <div className="service-btn">
                        <button onClick={handleLearnMoreClickBrand}>LEARN MORE</button>
                    </div>
                </div>
                <div className='service-boxes'>
                    <div className='service_icon'>
                        <img src={content} alt="" width={58} className='img-fluid' />
                    </div>
                    <div className='service_txt'>
                        <p>Content Marketing</p>
                        <small>Fusion 360’s content marketing department was built specifically to produce the content that makes digital marketing work.</small>
                    </div>
                    <div className="service-btn">
                        <button onClick={handleLearnMoreClickMarket}>LEARN MORE</button>
                    </div>
                </div>

                <div className='service-boxes'>
                    <div className='service_icon'>
                        <img src={search} alt="" width={58} className='img-fluid' />
                    </div>
                    <div className='service_txt'>
                        <p>Search Engine Optimization</p>
                        <small>At Fusion 360, Search Engine Optimization is part of our Content Marketing offering. Our SEO efforts go way beyond simply optimizing your website.</small>
                    </div>
                    <div className="service-btn">
                        <button onClick={handleLearnMoreClickSearchOps}>LEARN MORE</button>
                    </div>
                </div>

                <div className='service-boxes'>
                    <div className='service_icon'>
                        <img src={message} alt="" width={58} className='img-fluid' />
                    </div>
                    <div className='service_txt'>
                        <p>Social Media Marketing</p>
                        <small>
                            The days of “interrupting” a target market with a marketing message are over. The world today is in the middle of an ongoing
                            conversation.
                        </small>
                    </div>
                    <div className="service-btn">
                        <button onClick={handleLearnMoreClickSocial}>
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>

            <div className="container service-box">
                <div className='service-boxes'>
                    <div className='service_icon'>
                        <img src={card} alt="" width={58} className='img-fluid' />
                    </div>
                    <div className='service_txt'>
                        <p>Pay Per Click</p>
                        <small>The Fusion 360 Outbound Media Department offers strategic thinking for our clients.</small>
                    </div>
                    <div className="service-btn">
                        <button onClick={handleLearnMoreClickPayPer}>LEARN MORE</button>
                    </div>
                </div>

                <div className='service-boxes'>
                    <div className='service_icon'>
                        <img src={dev} alt="" width={58} className='img-fluid' />
                    </div>
                    <div className='service_txt'>
                        <p>Website Development</p>
                        <small>Our 100% in-house, Interactive Developers are trained in understanding how to create interfaces that are intuitive and invite people in.</small>
                    </div>
                    <div className="service-btn">
                        <button onClick={handleLearnMoreClickWebDev}>LEARN MORE</button>
                    </div>
                </div>
                <div className='service-boxes'>
                    <div className='service_icon'>
                        <img src={video} alt="" width={58} className='img-fluid' />
                    </div>
                    <div className='service_txt'>
                        <p>Video Production</p>
                        <small>
                            Our 100% in-house, Emmy™, Telly™ and Mercury™ Award winning creative capabilities range from TV commercials to live-action video to
                            motion graphics to sound design to internet videos.
                        </small>
                    </div>
                    <div className="service-btn">
                        <button onClick={handleLearnMoreClickVideo}>LEARN MORE</button>
                    </div>
                </div>
                <div className='service-boxes'>
                    <div className='service_icon'>
                        <img src={measure} alt="" width={58} className='img-fluid' />
                    </div>
                    <div className='service_txt'>
                        <p>Measurement + Analytics</p>
                        <small>Where there is accountability, things get done and what gets measured, creates accountability.</small>
                    </div>
                    <div className="service-btn">
                        <button onClick={handleLearnMoreClickMeasure}>LEARN MORE</button>
                    </div>
                </div>
            </div>

            <div className="container hireus-btn">
                <button>
                    HIRE US
                    <img src={fuslog} alt="logo" width={140} />
                    <a href="tel:+801-619-1919"><IoIosCall className='hirecall' /> 801-619-1919</a>
                    <a href="mailto:info@fusion360studios.com"> <IoMdMail className='hirecall' /> info@fusion360studios.com</a>
                </button>
            </div>
        </div>
    )
}

export default Services