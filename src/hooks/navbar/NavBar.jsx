import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import fusionLogo from '../../assets/Fusion360-email-logo.png';
import './NavBar.css';
import Form from 'react-bootstrap/Form';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='navbar_col'>
            <div className='hamb' onClick={handleMenuToggle}>
                {isMenuOpen ? <GiCancel /> : <GiHamburgerMenu />}
            </div>
            <div className={`nav_right ${isMenuOpen ? 'menu-open' : ''}`}>
                <div>
                    <Link to='/'>
                        <img src={fusionLogo} alt='' width={100} />
                    </Link>
                </div>
                <div>
                    <span>BRANDING |</span>
                    <span> DIGITAL |</span>
                    <span> VIDEO |</span>
                    <span> WEB</span>
                </div>

                {/* Backdrop */}
                {isMenuOpen && <div className='backdrop' onClick={closeMenu}></div>}

                {/* Off-canvas menu */}
                {isMenuOpen && (
                    <div className='off-canvas-menu'>
                        <ul>
                            <li><a href="#services" onClick={closeMenu}>SERVICES</a></li>
                            <li><a href="#video-production" onClick={closeMenu}>VIDEO PRODUCTION</a></li>
                            <li><a href="https://fusion360agency.com/proliferation/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>BLOG</a></li>
                            <li><Link to="/careers" >CAREERS</Link></li>
                            <li><a href="#contacts" onClick={closeMenu}>CONTACT</a></li>
                            <li>
                                <Form className='d-flex'>
                                    <Form.Control
                                        type='search'
                                        placeholder='Search...'
                                        className='me-2 custom-placeholder'
                                        aria-label='Search'
                                    />
                                </Form>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
