import styled from 'styled-components'
import { StyledOpenProps } from './types'
import { Query } from 'styles/mediaQueries'

export const Burger = styled.div<StyledOpenProps>`
  position: fixed;
  top: 30px;
  right: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 105;
  cursor: pointer;

  div{
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #c0c4c8;
    height: 3px;
    margin-top: 4px;
    display: block;
  }

  @media ${Query.s} {
    display: none;
  }
`

export const bar1 = styled.div<StyledOpenProps>`
  width: 25px;
  transform: ${ props => props.open && "rotate(-45deg)"};
  margin-top: ${ props => props.open && "13px!important"};
`


export const bar2 = styled.div<StyledOpenProps>`
  width: ${ props => props.open ? "0px": "32px"};
`
export const bar3 = styled.div<StyledOpenProps>`
  width: ${ props => props.open ? "25px": "16px"};
  transform: ${ props => props.open && "rotate(45deg)"};
  margin-top: ${ props => props.open && "-10px!important"};
`