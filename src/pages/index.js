import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Project from "../components/Project"
import Contact from "../components/Contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Project />
    <Contact />
  </Layout>
)

export default IndexPage
