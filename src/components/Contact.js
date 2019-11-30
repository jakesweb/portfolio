import React, { Component } from "react"
import { FaGithub, FaBlog, FaDev } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaCodepen } from "react-icons/fa"
import { FaGitlab } from "react-icons/fa"
import styled from "styled-components"

const ContactList = styled.ul`
  margin-top: 25px;
  list-style: none;
  font-size: 1.9em;
  width: 85%;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 25px;
  li {
    display: inline;
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

class Contact extends Component {
  render() {
    return (
      <div>
        <ContactList>
          <li>
            <a href="https://www.github.com/jakesweb">
              <FaGithub color="black" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jcolborn90">
              <FaTwitter color="black" />
            </a>
          </li>
          <li>
            <a href="mailto:jacob.colborn@gmail.com">
              <FaEnvelope color="black" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/jakesweb">
              <FaCodepen color="black" />
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/jcolborn">
              <FaGitlab color="black" />
            </a>
          </li>
          <li>
            <a href="https://dev.to/jakesweb">
              <FaDev color="black" />
            </a>
          </li>
        </ContactList>
        <EndParagraph>Jacob Colborn - 2019</EndParagraph>
      </div>
    )
  }
}

export default Contact
