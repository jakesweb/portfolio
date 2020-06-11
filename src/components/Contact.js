import React from "react"
import styled from "styled-components"

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
  textarea {
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

const Contact = () => (
  <div>
    <HeaderText>
      Feel free to contact me with any questions or opprotunities. Thank you!
    </HeaderText>
    <StyledForm name="contact" netlify>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Message
        <textarea name="message" cols="30" rows="10" />
      </label>
      <br />
      <input type="submit" value="Contact" name="submit" id="submit" />
    </StyledForm>
  </div>
)

export default Contact
