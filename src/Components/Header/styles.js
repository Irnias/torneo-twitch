import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items:center;
  background: #fcfcfc;
  border-bottom: 1px solid #e0e0e0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  height: 50px;
  position: fixed;
  width: 100%;
  max-width: 1200px;
  z-index: 1;
  
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: black;
    &:after{
      ${fadeIn({ time: '0.5s' })};
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 35px;
      line-height: 35px;
    }
  }
`
export const Linka = styled.a`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`