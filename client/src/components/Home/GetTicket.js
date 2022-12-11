import React from 'react'
import './GetTicket.css'
import { Button } from '@cred/neopop-web/lib/components';
function GetTicket() {
  return (
<div className='getticket'>
    <h1>SEE YOU AT<br></br>UDGAM 2023</h1>
    <h3>Save the date and secure your seat at the summit.</h3>
    <div class="buttoncenter"><Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            colorConfig={{backgroundColor:"#F0E266",borderColor:"#736B1F"}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            <p style={{color:"black"}}>GET TICKET</p>
    </Button></div>
</div>
  )
}

export default GetTicket
