import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding-left: 15%;
  padding-top: 10%;
  padding-bottom: 15%;
`

const StyledParagraph = styled.p`
  font-size: 1.2em;
  text-align: left;
  justify-self: center;
  margin: 0 auto;
  padding-bottom: 3px;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledParagraph>
      Hello! - My name is <span>Jacob</span>
    </StyledParagraph>
    <StyledParagraph>
      and I am a <span>developer</span>
    </StyledParagraph>
    <StyledParagraph>from Charlotte, NC</StyledParagraph>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
