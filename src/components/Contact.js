import React, { Component } from "react"
import styled from "styled-components"
import { navigateTo } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const HeaderText = styled.h1`
  text-align: center;
`

const StyledForm = styled.form`
  text-align: center;
  label {
    display: block;
    font-weight: 400;
    font-size: 2.2rem;
  }
  input,
  textarea,
  button {
    display: block;
    margin: 0 auto !important;
    border-radius: 5px;
    box-shadow: 5px 2px 2px black;
    font-size: 2.5rem;
  }
  #submit {
    margin-top: 15px;
  }
`

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventdefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  render() {
    return (
      <div>
        <HeaderText>
          Feel free to contact me with any questions or opprotunities. Thank
          you!
        </HeaderText>
        <StyledForm
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks"
          method="post"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Dont' Fill this out
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <label>
            Name
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Message
            <textarea
              name="message"
              cols="30"
              rows="10"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit" name="submit" id="submit">
            Contact
          </button>
        </StyledForm>
      </div>
    )
  }
}
export default Contact
