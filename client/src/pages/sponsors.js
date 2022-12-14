import React from 'react'
import { Button } from '@cred/neopop-web/lib/components';
import './sponsors.css'
import sponsordemo from '../icons/sponsordemo.png'
import Navbar from '../components/Navbar';
function Sponsors() {
    return (
        <body class="sponsorpage">
            <Navbar/>
<div class="sponsorbox">
            <h1>Sponsors</h1>
        </div>
        <div class="containersponsorbox">
            <div class="title-sponsor">
                <h3>Title Sponsor</h3>
                 <img src={sponsordemo}></img>                           
            </div>

            <div class="associate-title">
                <div class="individual-associate">
                <img src={sponsordemo}></img>       
                    <h3>Associate Title Sponsor</h3>                                       
                </div>

                <div class="individual-associate">
                <img src={sponsordemo}></img>       
                    <h3>Associate Title Sponsor</h3>
                </div>

                <div class="individual-associate">
                <img src={sponsordemo}></img>       
                    <h3>Associate Title Sponsor</h3> 
                </div>
            </div>

            <div class="partners media-partner">
                <h3>Media Partners</h3>
                <div class="individual-partner">
                <img src={sponsordemo}></img> 
                <img src={sponsordemo}></img>       
                <img src={sponsordemo}></img>             
                <img src={sponsordemo}></img>       
                </div>
            </div>
            <div class="partners event-partner">
                <h3>Event Partners</h3>
                <div class="individual-partner">
                <img src={sponsordemo}></img>       
                <img src={sponsordemo}></img>       
                <img src={sponsordemo}></img>       
                <img src={sponsordemo}></img>       
                </div>
            </div>
            <div class="partners other-partner">
                <h3>Other Partners</h3>
                <div class="individual-partner">
                   
                <img src={sponsordemo}></img>       
                <img src={sponsordemo}></img>       
                <img src={sponsordemo}></img>       
                <img src={sponsordemo}></img>       
                </div>
            </div>
            <div class="text-button">
                <h1>want to become our sponsor?</h1>
                <button>Connect With Us</button>
            </div>
        </div>
        </body>
    );
}

export default Sponsors
