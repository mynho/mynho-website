import React from 'react'
import * as Styled from './styles'

const HamburgerIcon = ({open, onClick}: {open: boolean, onClick: VoidFunction}) => {
  // open = true;
  return (
    <Styled.Burger open={open} onClick={onClick}>
      <Styled.bar1 open={open} />
      <Styled.bar2 open={open} />
      <Styled.bar3 open={open} />
    </Styled.Burger>
  )
}

export default HamburgerIcon
