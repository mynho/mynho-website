import React from 'react'
import Link from 'next/link'
import * as Styled from './styles'

const NavItem = ({ link, text }: { link: string, text: string }) => {
  return (
    <Styled.NavItem>
      <Link href={link} passHref>
        <Styled.A>
          {text}
        </Styled.A>
      </Link>
    </Styled.NavItem>
  );
};

export default NavItem;
