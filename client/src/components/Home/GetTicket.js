import React from 'react'
import './GetTicket.css'
import { Button } from '@cred/neopop-web/lib/components';
function GetTicket() {
  return (
<div className='getticket'>
    <h1>SEE YOU AT<br></br>UDGAM 2023</h1>
    <h3>Save the date and secure your seat at the summit.</h3>
    <div class="buttoncenter">        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
             colorConfig={{backgroundColor:"#F0E266",borderColor:"#736B1F",edgeColors:{right:"#736B1F",bottom:"#736B1F"}}}
             spacingConfig={{height:"80px"}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            <div className="GetTkt" style={{color:"black"}}>GET MY TICKET</div>
    </Button></div>
</div>
  )
}

export default GetTicket
