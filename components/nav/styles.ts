import styled from 'styled-components'
import { StyledOpenProps } from './types'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  background: orange;
  justify-content: space-between;
`

export const Logo = styled.div`
  /* width: 100%; */
  img{
    height: 50px;
  }

`
export const NavItems = styled.ul<StyledOpenProps>`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* If mobile and open, do stuff */
  /* width: ${ props => props.open ? "25px": "16px"}; */

`