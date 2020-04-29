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

  </Layout>
)

export default IndexPage
