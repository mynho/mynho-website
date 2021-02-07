import styled from 'styled-components'

export const NavItem = styled.li`
  list-style-type: none;
  color: ${({theme}) => theme.colors.text};
`

export const A = styled.a`
  color: ${({theme}) => theme.colors.dark};
  text-decoration: none;
  padding: 5px 10px;
`