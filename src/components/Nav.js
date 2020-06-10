import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 2.5rem;
  padding-bottom: 5rem;
  padding-top: 2rem;
  a {
    margin: 1em 1em;
    text-decoration: none;
    color: #000b00;
  }
  a:hover {
    color: #bb0b00;
  }
`

const Nav = () => (
  <StyledDiv>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </StyledDiv>
)

export default Nav
