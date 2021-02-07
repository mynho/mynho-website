import React from 'react';
import * as Styled from './styles';
import { NavItem } from 'components';
import { Query } from 'styles/mediaQueries'

const Nav = () => {
  console.log(`@media ${Query.xxs} {}`);
  
	return (
    <Styled.Nav>
      <Styled.Logo>
        <img src="http://mynho.nl/public/img/logo_white.svg" alt="Mynho logo"/>
      </Styled.Logo>
      <Styled.NavItems>
        <NavItem link="https://google.com" text='home' />
        <NavItem link="https://google.com" text='Over ons' />
        <NavItem link="https://google.com" text='Ons werk' />
        <NavItem link="https://google.com" text='Werkwijze' />
        <NavItem link="https://google.com" text='Contact' />
      </Styled.NavItems>
    </Styled.Nav>
	);
};

export default Nav