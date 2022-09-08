import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { useState } from 'react'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, Hspan, HeroButton } from './HeroElements'
const Hero  = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => (
    setIsOpen(!isOpen)
    
  )


  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  /*
    za dugme hover na mouse pokrete 
    smooth i duration su from react-scroll
    spy dodaje 
  */
  return (
        <HeroContainer id="home">
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
              <HeroItems>
                <HeroH1>BEYOND FASHION</HeroH1>
                <HeroP>Don't miss creating it with <br/><Hspan> <a href="https://www.instagram.com/irinashayk/" rel='noreferrer' target="_blank">IRINA SHAYK</a></Hspan></HeroP>
                <HeroButton  
                       onMouseEnter={onHover}
                       onMouseLeave={onHover}
                      //  smooth={true}
                      //  duration={500}
                      //  spy={true} 
                      //  exact='true' 
                       >
                       <a href="https://www.versace.com/international/en/women/highlights/new-arrivals/" target="_blank" rel='noreferrer'>SHOP NOW</a>
                </HeroButton>
              </HeroItems>
            </HeroContent>
            
        </HeroContainer>

  )
}

export default Hero 
