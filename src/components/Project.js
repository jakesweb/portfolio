import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import ProjectItem from "./ProjectItem"

const ProjectGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 15px;
  justify-content: center;
  align-items: baseline;
  margin: auto;
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
)

export default Project
