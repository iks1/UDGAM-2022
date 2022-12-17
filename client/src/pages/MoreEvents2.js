import React, { useEffect } from 'react';
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
import { useLocation } from "react-router-dom";
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
import "./MoreEvents.css";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MoreEvents2 = () => {
    const eventsdata = [
        {
            "tag": "ls",
            "id": "b1",
            "ori": "left",
            "image": ls,
            "eventName": "LECTURE SERIES",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },

        {
            "tag": "internfair",
            "id": "b2",
            "ori": "left",
            "image": internfair,
            "eventName": "INTERNFAIR",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },

        {
            "tag": "pmx",
            "id": "b3",
            "ori": "left",
            "image": pmx,
            "eventName": "PMx",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },

        {
            "tag": "disrupt",
            "id": "b4",
            "ori": "left",
            "image": disrupt,
            "eventName": "DISRUPT",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },

        {
            "tag": "need",
            "id": "b5",
            "ori": "left",
            "image": need,
            "eventName": "NEED",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },

        {
            "tag": "cosmicclash",
            "id": "b6",
            "ori": "left",
            "image": cosmicClash,
            "eventName": "COSMIC CLASH",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },
        {
            "tag": "dframe",
            "id": "b7",
            "ori": "right",
            "image": Dframe,
            "eventName": "D-FRAME",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },
        {
            "tag": "encode",
            "id": "b8",
            "ori": "right",
            "image": encode,
            "eventName": "ENCODE",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },
        {
            "tag": "funevents",
            "id": "b9",
            "ori": "right",
            "image": funEvents,
            "eventName": "FUN EVENTS",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },
        {
            "tag": "sparkle",
            "id": "b10",
            "ori": "right",
            "image": sparkle,
            "eventName": "SPARKLE",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        },
        {
            "tag": "workshops",
            "id": "b11",
            "ori": "right",
            "image": workshops,
            "eventName": "WORKSHOPS",
            "eventDesc": "Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?<br><br><br>To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, \"Disrupt\" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.<br> Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more. "
        }

    ]

    const search = useLocation().search;
    useEffect(() => {
        eventsdata.forEach((eventsda) => {
            document.getElementById(eventsda.tag).className = "containerM"     
        });
        const eventname = new URLSearchParams(search).get('event');

        var event = eventsdata.find(o => o.tag === eventname);
        if (event == null) {
            event = eventsdata[0]
        }
        document.getElementsByClassName("eventName")[0].innerHTML = event.eventName;
        document.getElementsByClassName("eventtext")[0].innerHTML = event.eventDesc;
        document.getElementsByClassName("imgevent")[0].src = event.image;
        if (event.ori == "left") {
            document.getElementById("boxevent").className = "box olbg"
        }
        if (event.ori == "right") {
            document.getElementById("boxevent").className = "box orbg"
        }
        document.getElementById(event.tag).className = "containerMhigh"
        var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        
    });

    function countDowntimer(){
        var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        // Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }}, 1000);
    }
    return (
        <div className="moreEvents">
            <Navbar />
            <div id="moreEvents">
                <div id="eventsListHeading">
                    EVENTS LIST
                </div>
                <div id="eventmainContainer">
                    <div className="one">
                        <div id="ls" className="containerMhigh">
                            <div className="headingM">
                                <p className='lec'>LECTURE SERIES</p>
                                <Link to={"/events?event=ls"} params={{ event: 1 }}>
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div id="internfair" className="containerM">
                            <div className="headingM">
                                <p>INTERN<br></br>FAIR</p>
                                <Link to={"/events?event=internfair"} >
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div id="pmx"className="containerM">
                            <div className="headingM">
                                <p>PMx</p>
                                <Link to={"/events?event=pmx"}>
                                    <img src={arrowR} alt="" id="b3" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div id="disrupt"className="containerM">
                            <div className="headingM">
                                <p>DISRUPT</p>
                                <Link to={"/events?event=disrupt"} >
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div id="need" className="containerM">
                            <div className="headingM">
                                <p>NEED</p>
                                <Link to={"/events?event=need"} >
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div id="cosmicclash" className="containerM">
                            <div className="headingM">
                                <p>COSMIC CLASH</p>
                                <Link to={"/events?event=cosmicclash"} >
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        {/* SINGLE EVENT */}
                        <div className="two">
                            <div className="box erbg" id="boxevent">
                                <img src={ls} alt="" className="imgevent" />
                                <div className="boxHeading">
                                    <div className="icon"><img src={Logo} alt="" /></div>
                                    <div className="headingText">
                                        <div className="eventName">LECTURE SERIES</div>
                                        <img src="boxLine.svg" alt="" />
                                        <div >
                                            <p className="small">Product Management</p>
                                            <p className="big">EXPEDITION</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <button id="register">
                                        <p>Register</p>
                                        <img src={Vector3} alt="" />
                                    </button>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText">
                                            Paid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three">
                        <div id="dframe" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=dframe"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>D-FRAME</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div id="encode" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=encode"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>ENCODE</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div id="funevents" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=funevents"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>FUN EVENTS</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div id="sparkle" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=sparkle"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>SPARKLE</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p>ends in 03:09:54</p>
                            </div>
                        </div>
                        <div  id="workshops" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=workshops"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>WORKSHOPS</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
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