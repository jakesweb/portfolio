import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import ProjectItem from "./ProjectItem"

const ProjectGrid = styled.div`
  width: 85%;
  display: grid;
  grid-gap: 3.5rem;
  grid-template-columns: repeat(3, 2fr);
  justify-content: center;
  align-items: center;
  margin: 0 auto !important;
  img {
    padding-bottom: 5%;
    max-width: 100%;
    box-sizing: inherit;
  }
`

function getProjectsList(data) {
  const projectsArray = []
  data.allProjectsJson.edges.forEach(item =>
    projectsArray.push(
      <ProjectItem
        image={item.node.image}
        link={item.node.link}
        title={item.node.title}
      />
    )
  )
  return projectsArray
}

const Project = ({ children }) => (
  <>
    {/* <div className="header-div">
      <h1>My Projects</h1>
    </div> */}
    <StaticQuery
      query={graphql`
        query ProjectItemQuery {
          allProjectsJson {
            edges {
              node {
                image
                link
                title
              }
            }
          }
        }
      `}
      render={data => <ProjectGrid>{getProjectsList(data)}</ProjectGrid>}
    />
  </>
)

export default Project
