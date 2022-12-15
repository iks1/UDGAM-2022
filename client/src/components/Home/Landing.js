import React from 'react'
import Bosch from '../../icons/bosch-logo.png'
import UdgamShapping from '../../icons/udgam-spring.png'
import landingSponsors from '../../icons/lands.png'
import CountIn from './LAnding_CountIn'
import Navbar2 from '../Navbar2'

function Landing() {
  return (
    <div className='landing'>
       <Navbar2 />
       <img className='bosch' src={Bosch} alt=''/> 
       <img className='udgamShapping' src={UdgamShapping} alt=''/>
       <img className='landingSpons' src={landingSponsors} alt=''/>
       <CountIn/>
    </div>
  )
}

export default Landing
