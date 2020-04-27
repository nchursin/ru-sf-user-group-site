import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Calendar from "../components/calendar"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <h1>Hi people</h1>

    <About/>

    <Calendar/>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>


  </Layout>
)

export default IndexPage
