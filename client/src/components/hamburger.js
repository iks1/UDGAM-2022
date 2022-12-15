import React from 'react'
import "./hamburger.css"
import { Button } from '@cred/neopop-web/lib/components';
import "./Home/navbar_landing.css";
import Icon from "../icons/icon.png"
import Buy from "../icons/Ticket.png"

import Navbar from './Navbar';
function Hamburger() {
    return (
        <>

            <body className="humburg">

                <div className="row biro">
                    <div className="col-lg-6 col-sm-12">
                        <div className="gon">
                        <div> <a href="/events" className="nav-item humnav">Events </a></div>
                            <div> <a href="/events" className="nav-item humnav">Schedule </a></div>
                            <div><a href="/#merch" className="nav-item humnav">merch </a></div>
                        </div>
                        <div className="CoC">Lost the pass you bought? We got you covered.</div>
                        <div><br /><input className="input_pass" placeholder="Enter Your Mail..." /></div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="mr-3 nav-right">
                            <div className="netero" >
                                <p className="killus humnav"><a href="/contactus" className='humnav' >Contact Us</a></p>
                                <p className="hisoka humnav"  ><a href="/speakers" className='humnav'>Speakers</a></p>
                                <p className="kurapika humnav" ><a href="/team" className='humnav'>Our Team</a></p>
                                <p className="leo humnav"><a href="/sponsors" className='humnav' >Sponsors</a></p>
                            </div>
                            <p className="Among_Us humnav">
                                About Us
                            </p>
                            <section id="inner-5 " className="blob">

                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                ><i className="fab fa-facebook-f"></i></a>

                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                ><i className="fab fa-google"></i></a>

                                <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com/spirit_iitguwahati?igshid=YmMyMTA2M2Y=" role="button"
                                ><i className="fab fa-instagram"></i></a>

                                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                ><i className="fab fa-linkedin-in"></i></a>
                            </section>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Hamburger
