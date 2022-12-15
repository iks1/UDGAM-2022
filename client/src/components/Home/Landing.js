import React from 'react'
import Bosch from '../../icons/bosch-logo.png'
import UdgamShapping from '../../icons/udgam-spring.png'
import landingSponsors from '../../icons/lands.png'
import CountIn from './LAnding_CountIn'
import {motion} from 'framer-motion'

function Landing() {
  return (
    <div className='landing'>
       <img className='bosch' src={Bosch} alt=''/> 
       <img className='udgamShapping' src={UdgamShapping} alt=''/>
       <img className='landingSpons' src={landingSponsors} alt=''/>
       <CountIn/>
    </div>
  )
}

export default Landing
