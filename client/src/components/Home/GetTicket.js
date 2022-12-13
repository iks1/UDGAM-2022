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
            colorConfig={{backgroundColor:"#D4F34A",borderColor:"#000000",edgeColors:{right:"#FC97D9",bottom:"#FC97D9"}}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            <div style={{color:"black"}}>GET TICKET</div>
    </Button></div>
</div>
  )
}

export default GetTicket
