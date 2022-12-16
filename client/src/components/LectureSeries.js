import React from 'react'
import "../pages/LectureSeries.css"
import ls from "../icons/ls.svg"
import Logo from "../icons/Logo.svg"
import Vector3 from "../icons/Vector3.svg"
import Line from "../icons/Line.svg"


function LectureSeries() {
  return (
    <div>
       <div class="two">
                <div class="box">
                    <img src={ls} alt="" class="imgevent"/>
                    <div class="boxHeading">
                        <div class="icon"><img src={Logo} alt=""/></div>
                        <div class="headingText">
                            <div class="eventName">LECTURE SERIES</div>
                            <img src="boxLine.svg" alt=""/>
                            <div >
                                <p class="small">Product Management</p>
                                <p class="big">EXPEDITION</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="description">
                    <div id="head">
                        <div id="date">
                            <p class="dateText">Date</p>
                            <p class="date">19-22 Jan</p>
                        </div>
                        <button id="register">
                            <p>Register</p> 
                            <img src={Vector3} alt=""/>
                        </button>
                    </div>
                    <div class="text">
                        Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?  

                        To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty. 
                        Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. 
                    </div>
                    <div class="descFooter">
                        <div class="block" id="block1">
                            <div class="footerHeading">
                                Registration<br/>deadline
                            </div>
                            <div class="footerText">
                                15/1/2023
                            </div>
                        </div>
                        <img src={Line} alt=""/>
                        <div class="block" id="block2">
                            <div class="footerHeading">
                                Prices Worth
                            </div>
                            <div class="footerText">
                                10+ Lakhs
                            </div>
                        </div>
                        <img src={Line} alt=""/>
                        <div class="block" id="block3">
                            <div class="footerHeading">
                                Payment<br/>requirement
                            </div>
                            <div class="footerText">
                                Paid
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default LectureSeries
