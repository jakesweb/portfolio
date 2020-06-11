import React, { Component } from "react"
import styled from "styled-components"
import { navigateTo } from "gatsby"

const StyledDiv = styled.div`
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
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
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
      <StyledDiv>
        <h1>
          Feel free to send me a message about any questions or opportunities.
          Thank you!
        </h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea
                name="message"
                cols="30"
                rows="10"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </StyledDiv>
    )
  }
}

export default Contact
