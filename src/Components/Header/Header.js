import React from 'react'
import { Nav, Link,Linka } from './styles'
import { FaTwitch,FaHome,FaTwitter } from 'react-icons/fa'
import { MdCropLandscape } from 'react-icons/md'

const TEXTSIZE = '26px';
export const Header = () => {
  return(
    <Nav>
      <Linka target="_blank" href="https://www.twitch.tv/dami_r92"><FaTwitch size={TEXTSIZE}/></Linka>
      <Linka  target="_blank" href='https://twitter.com/dami_rk92'><FaTwitter size={TEXTSIZE}/></Linka>
      <Link to='/home'><FaHome size={TEXTSIZE}/></Link>
      <Link to='/participantes'><MdCropLandscape size={TEXTSIZE} /></Link>
      <Link to='/resultados'></Link>
      
    </Nav>
  )
}