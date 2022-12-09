import React from 'react'
import Page from '../components/BuyTicketButton';
import '../Buyticket.css'



function GetTicket() {
  return (
        <div className='Body'>
            <div className="content">
                
                    <h1 className="alpha">SEE YOU AT</h1>
                
                <h1 className='beta' >UDGAM 2023</h1>

            </div>

            <h3 className="foot">Save the date and secure your seat at the summit.</h3>

            {/* <div className="GetTicket">

            </div>
            <div className="GetTicket1">


                <a href="https://www.youtube.com/"><p className="a"><strong>Get My Ticket</strong></p></a>


            </div> */}
           <Page  padding="0" />
       
           
           
        </div>
  )
}

export default GetTicket
