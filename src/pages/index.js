import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Project from "../components/Project"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Project
      link="https://res.cloudinary.com/jakes-web/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1560478939/sickfits/ed4ribdtaavisodktany.png"
      title="river,bike"
    />
  </Layout>
)

export default IndexPage
