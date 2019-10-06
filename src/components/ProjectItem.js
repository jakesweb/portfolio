// ProjectItem.js
// Component to display the project link (if active) with an uploaded image
// Props - {imageSource, link, title}
// image - URL for image
// link - Link to the project, if available
// title - title of the project

import React, { Component } from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: 200px;
  height: 200px;
  p {
    text-align: center;
    font-size: 1.2em;
    color: #7851a9;
    font-weight: bold;
  }
  .container {
    position: relative;
    width: 100%;
  }
  .overlay {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: #7851a9;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
  }
  .container:hover .overlay {
    bottom: 0;
    height: 100%;
  }
  .text {
    color: black;
    font-size: 20px;
    font-weight: bolder;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`

class ProjectItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledContainer>
        <div class="container">
          <img src={this.props.image} alt={this.props.title} />
          {this.props.link && (
            <div class="overlay">
              <a href={this.props.link}>
                <div class="text">Explore This Project</div>
              </a>
            </div>
          )}
        </div>
        <p>{this.props.title}</p>
      </StyledContainer>
    )
  }
}

export default ProjectItem
