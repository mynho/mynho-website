import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: ${({theme}) => theme.breakpoints.xs}) {
    width: 540px;
  }
  @media only screen and (min-width: ${({theme}) => theme.breakpoints.s}) {
    width: 720px;
  }
  @media only screen and (min-width: ${({theme}) => theme.breakpoints.m}) {
    width: 960px;
  }
  @media only screen and (min-width: ${({theme}) => theme.breakpoints.l}) {
    width: 1140px;
  }
`