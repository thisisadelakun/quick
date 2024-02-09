import React from 'react'
import './Casestudies.css'
import redbull from '../../assets/red-bull.png'
import ford from '../../assets/ford.png'
import fox from '../../assets/fox.png'
import peter from '../../assets/peterbilt.png'
import carhat from '../../assets/carhartt2.png'
import pepsi from '../../assets/pepsi.png'
import wrangler from '../../assets/wrangler.png'
import enzyte from '../../assets/enzyte.png'
import sparx from '../../assets/spar-x.png'
import fort from '../../assets/square_0000s_0010_fort-knox.png'
import nbl from '../../assets/square_0000s_0005_nbl.png'
import robert from '../../assets/debry.png'
import fmf from '../../assets/fmf.png'
import sel from '../../assets/square_0000s_0002_stein-eriksen.png'
import castle from '../../assets/castle-cooke.png'
import hday from '../../assets/square_0000s_0014_henry-day-2.png'
import hertz from '../../assets/hertz-car-sales.png'
import ameritech from '../../assets/square_0000s_0009_ameritech.png'

const Casestudies = () => {
    return (
        <div className='case-col'>
            <div className="container case-box">
                <div className="case-boxes">
                    <img src={redbull} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={ford} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={fox} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={peter} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={carhat} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={pepsi} alt="" className='img-fluid' width={180} />
                </div>
            </div>

            <div className="container case-box">
                <div className="case-boxes">
                    <img src={wrangler} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={enzyte} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={sparx} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={fort} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={nbl} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={fmf} alt="" className='img-fluid' width={180} />
                </div>
            </div>

            <div className="container case-box">
                <div className="case-boxes">
                    <img src={sel} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={robert} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={hday} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={castle} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={ameritech} alt="" className='img-fluid' width={180} />
                </div>
                <div className="case-boxes">
                    <img src={hertz} alt="" className='img-fluid' width={180} />
                </div>
            </div>
        </div>
    )
}

export default Casestudies