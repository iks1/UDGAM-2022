import React from 'react';
import Vector from '../icons/Vector007.svg'
import Merch from '../components/Merch_Button';
import Vector1 from '../icons/Icon.svg'
import Vector2 from '../icons/arrow.svg'
import Checkout from '../components/Checkout';
import Vector3 from '../icons/udgam.svg';
import Navbar from '../components/Navbar';
import './Registration.css';

function Registration(){

    return(
        
        <div className='Body7' style={{backgroundImage:"linear-gradient(to bottom, #1A074E 0%, #060213 100%)"}}>
  
    <Navbar/>

  <h1 className="Pinfo">PERSONAL INFORMATION</h1>
   <p>
     *
   </p>
<div className="dabba">

</div>
<div className="rowalpha">
  <div className="columnbeta c1">PERSONAL DETAILS</div>
  <div className="columnbeta c2">MERCH KIT</div>
  <div className="columnbeta c3">PAYMENT</div>
</div>
<div className="pehla">
<div className="f5"><input type="text" name="fname" placeholder="First name..."/></div>
<div className="aakhri">
  <input type="text" name="lname" placeholder="Last name..."/>
</div>
</div>
<input className="e7"type="text1" name="email" placeholder="Type your Email..."/ >
<p className="H21">Only for IIT Guwahati Students</p>
<div className="pehla dusra">
<input type="text" name="Outlook" placeholder="Outlook mail id..."/>
<input type="text" name="RollNo" placeholder="Roll no..."/>
</div>
<p className="H21 H31">Password shoud have at least 8 characters</p>
<div className="pehla teesra">
  <input type="text" name="CreatePass" placeholder="Create Password"/>
  <input type="text" name="ConfirmPass" placeholder="Confirm Password"/>
</div>
<p className='delta1'>Accepted</p>
<div className="card7">
<img src={require("../icons/udgamPassBG.png")} alt="CardBG"></img>
<img  className ="udgam7" src={Vector3}/>

<p className="alpha">Udgam pass</p>
<p className="beta">Total Price -</p>
<p className="beta beta1">Udgam Pass -</p>
<p className="beta beta2">Merchkit Addon -</p>
<p className="beta beta3">Events List - Internfair, Pmx, Fun events  </p>
<p className="beta beta4">Exclusive Perks - Voiceflow thing, Discount</p>

<p className="beta beta4 beta5"><br/>Coupons</p>

<p className="gamma">$199</p>
<p className="gamma1">$199</p>
<p className="gamma1 gamma2">$199</p>
</div>
<div className="vector">
  <img className=" img1"src={Vector}alt="img1"/>
  <img className="img1 img2"src={Vector} alt="img2"/>
  <img className="img1 img3"src={Vector} alt="img3"/>
  <img className="img1 img4"src={Vector} alt="img4"/>

</div>
<div className='Merch'><Merch icon={Vector1} title=" Merch kit addon"/></div>
<div className="Checkout"><Checkout title="CHECK OUT →" /></div>
 

        </div>
        
    )

}

export default Registration;