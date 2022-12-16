import React from 'react';
import arrowR from "./../icons/arrowR.svg";
import arrowL from "./../icons/arrowL.svg";
import boxELBG from "./../icons/boxELBG.svg";
import boxERBG from "./../icons/boxERBG.svg";
import boxLine from "./../icons/boxLine.svg";
import boxOLBG from "./../icons/boxOLBG.svg";
import boxORBG from "./../icons/boxORBG.svg";
import clickedArrowL from "./../icons/clickedArrowL.svg";
import clickedArrowR from "./../icons/clickedArrowR.svg";
import cosmicClash from "./../icons/cosmicClash.svg";
import Dframe from "./../icons/Dframe.svg";
import disrupt from "./../icons/disrupt.svg";
import encode from "./../icons/encode.svg";
import funEvents from "./../icons/funEvents.svg";
import Line from "./../icons/Line.svg";
import internfair from "./../icons/internfair.svg";
import live from "./../icons/live.png";
import Logo from "./../icons/Logo.svg";
import ls from "./../icons/ls.svg";
import need from "./../icons/need.svg";
import pmx from "./../icons/pmx.svg";
import sparkle from "./../icons/sparkle.svg";
import Vector3 from "./../icons/Vector3.svg";
import workshops from "./../icons/workshops.svg";
import "./LectureSeries.css";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import LectureSeries from '../components/LectureSeries';

const MoreEvents2 =()=>
{   
    return(
        <div className="moreEvents">
            <Navbar/>
         <div id="moreEvents">
        <div id="eventsListHeading">
            EVENTS LIST
        </div>
        <div id="mainContainer">
            <div class="one">
                <div class="lectureseries">
                    <div class="headingM">
                        <p className='lec'>LECTURE SERIES</p>
                        <Link to={"/events/ls"}>
                        <img src={arrowR} alt="" id="b1" />
                        </Link>
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <p>INTERNFAIR</p>
                        <img src={arrowR} alt="" id="b2" />
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <p>PMx</p>
                        <Link to={"/events/pmx"}>
                        <img src={arrowR} alt="" id="b3" />
                        </Link>
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <p>DISRUPT</p>
                        <img src={arrowR} alt="" id="b4" />
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <p>NEED</p>
                        <img src={arrowR} alt="" id="b5" />
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <p>COSMIC CLASH</p>
                        <img src={arrowR} alt="" id="b6" />
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                
            </div>
            <LectureSeries/>
            <div class="three">
                <div class="containerM">
                    <div class="headingM">
                        <img src={arrowL} alt="" id="b7" />
                        <p>D-FRAME</p>
                        
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <img src={arrowL} alt="" id="b8" />
                        <p>ENCODE</p>
                        
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <img src={arrowL} alt="" id="b9" />
                        <p>FUN EVENTS</p>
                        
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <img src={arrowL} alt="" id="b10" />
                        <p>SPARKLE</p>
                        
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
                <div class="containerM">
                    <div class="headingM">
                        <img src={arrowL} alt="" id="b11" />
                        <p>WORKSHOPS</p>
                        
                    </div>
                    <div class="content">
                        Internship. Internship. Internship.
                    </div>
                    <div class="live">
                        <img src={live} alt=""/>
                        <p>ends in 03:09:54</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
        </div>
    );
}

export default MoreEvents2 