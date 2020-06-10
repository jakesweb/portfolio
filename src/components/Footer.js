import React, { Component } from "react"
import { FaGithub, FaBlog, FaDev } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaCodepen } from "react-icons/fa"
import { FaGitlab } from "react-icons/fa"
import styled from "styled-components"

const FooterDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`

const ContactList = styled.ul`
  margin-top: 25px;
  list-style: none;
  font-size: 1.9em;
  text-align: center;
  li {
    display: inline;
  }
  .spacing {
    padding-left: 30px;
  }
  a li {
    display: block;
  }
`

const EndParagraph = styled.p`
  font-size: 0.6em;
  text-align: center;
  margin-top: -10px;
  padding-left: 65px;
  width: 85%;
`

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <ContactList>
          <li>
            <a href="https://www.github.com/jakesweb">
              <FaGithub color="black" />
            </a>
          </li>
          <li class="spacing">
            <a href="https://twitter.com/jcolborn90">
              <FaTwitter color="black" />
            </a>
          </li>
          <li class="spacing">
            <a href="mailto:jacob.colborn@gmail.com">
              <FaEnvelope color="black" />
            </a>
          </li>
          <li class="spacing">
            <a href="https://codepen.io/jakesweb">
              <FaCodepen color="black" />
            </a>
          </li>
          <li class="spacing">
            <a href="https://gitlab.com/jcolborn">
              <FaGitlab color="black" />
            </a>
          </li>
          <li class="spacing">
            <a href="https://dev.to/jakesweb">
              <FaDev color="black" />
            </a>
          </li>
        </ContactList>
        <EndParagraph>Jacob Colborn - 2020</EndParagraph>
      </FooterDiv>
    )
  }
}

export default Footer
