import React, {useEffect, useState} from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
     Nav, 
     NavbarContainer,
     NavBarLink, 
     MobileIcon, 
     NavItemsMenu,
     NavItems,
     NavLink,
     NavBtn,
     NavBtnLink
    } from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import { FaBars } from 'react-icons/fa'


const Navbar = ( {toggle}) => {
/*scrool action  */

  const [scrollNav, setScrollNav] = useState(true)
  const changeNav = () => {
    if(window.scrollY >= -80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  },[])

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <IconContext.Provider value={{color:'#dda120'}}>
    <Nav scrollNav={scrollNav}>
           <NavbarContainer>    
            <NavBarLink to='/' onClick={toggleHome}>LUXURY.</NavBarLink>
            <MobileIcon onClick={toggle}> <FaBars/></MobileIcon>
            <NavItemsMenu>
            <NavItems>
                    <NavLink 
                    className='active'
                    to="show"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    exact='true' 
                    offset={-80}>
                    Show</NavLink>
                </NavItems>
                <NavItems>
                    <NavLink 
                    className='active'
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    exact='true' 
                    offset={-80}>
                    Runway</NavLink>
                </NavItems>
                <NavItems>
                    <NavLink
                    className='active'
                    to="discover"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                    Discover</NavLink>
                </NavItems>
                <NavItems>
                    <NavLink 
                    className='active'
                    to="explore"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    exact='true' 
                    offset={-80}>
                     Explore</NavLink>
                </NavItems>
            </NavItemsMenu>
              <NavBtn>
              <NavBtnLink 
                    to="signin"
                    smooth={true} 
                    duration={500}
                    spy={true} 
                    exact='true' 
                    offset={-80}>
                    Sign in
                    </NavBtnLink>
              </NavBtn>
           </NavbarContainer>
      </Nav>
    </IconContext.Provider>
     
    
    </>
  )
}

export default Navbar
