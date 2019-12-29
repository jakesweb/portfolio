import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ParagraphDiv = styled.div`
  margin-right: 10px;
  padding-right: 10px;
`

const StyledParagraph = styled.p`
  font-size: 1.4em;
  text-align: left;
  justify-self: center;
  margin: 0 auto;
  padding-bottom: 5px;
`

const StyledSpan = styled.span`
  font-size: 1.6em;
  color: #7851a9;
  font-style: italic;
`

const ImageDiv = styled.div`
  width: 12em;
  float: right;
  padding-bottom: 5%;
  img {
    border-radius: 50%;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <ParagraphDiv>
      <StyledParagraph>
        Hello! - My name is <StyledSpan>Jacob</StyledSpan>
      </StyledParagraph>
      <StyledParagraph>
        and I am a <StyledSpan>Web Developer</StyledSpan>
      </StyledParagraph>
      <StyledParagraph>from Charlotte, NC</StyledParagraph>
      <StyledParagraph>You can find some of my projects below!</StyledParagraph>
    </ParagraphDiv>
    <ImageDiv>
      <img
        src="https://res.cloudinary.com/jakes-web/image/upload/r_30/v1561317194/portofolio/jacob-headshot.jpg"
        alt="Jacob's Headshot"
      />
    </ImageDiv>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
