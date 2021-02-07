import React, {useState} from 'react';
import * as Styled from './styles';
import { NavItem, HamburgerIcon } from 'components';
import { Query } from 'styles/mediaQueries'

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(`@media ${Query.xxs} {}`);
  
	return (
    <Styled.Nav>
      <Styled.Logo>
        <img src="http://mynho.nl/public/img/logo_white.svg" alt="Mynho logo"/>
      </Styled.Logo>
      <Styled.NavItems open={navOpen}>
        <NavItem link="https://google.com" text='home' />
        <NavItem link="https://google.com" text='Over ons' />
        <NavItem link="https://google.com" text='Ons werk' />
        <NavItem link="https://google.com" text='Werkwijze' />
        <NavItem link="https://google.com" text='Contact' />
      </Styled.NavItems>
      <HamburgerIcon open={navOpen} onClick={() => setNavOpen(!navOpen)} />
      {/* <HamburgerIcon open={navOpen} onClick={() => console.log('asfd')} /> */}
    </Styled.Nav>
	);
};

export default Nav