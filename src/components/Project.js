import React, { Component } from "react"
import styled from "styled-components"

class Project extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img href={this.props.link} alt={this.props.title} />
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Project
