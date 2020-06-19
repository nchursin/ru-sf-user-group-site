import React from "react"

import Layout from "../components/layout"
import Calendar from "../components/calendar"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <h1>Добро пожаловать в Московское Сообщество Пользователей!</h1>
    <p>
      Обычно мы собираемся в Москве, но мы рады всем гостям как из России, так и из зарубежа.
    </p>

    <About/>

    <Calendar/>

  </Layout>
)

export default IndexPage
