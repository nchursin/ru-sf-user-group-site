import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from '../image'
import { LogoTrailhead } from '../logos'

import './header.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        flexWrap: "wrap"
      }}
    className="flex-center"
    >
      <h2 style={{
        flex: 1
      }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {/* Российское Сообщество Salesforce */}
          Salesforce Trailblazer
          <br/>
          Российское Сообщество
          {/* Разработчиков Salesforce */}
        </Link>
      </h2>

      <a
        href="https://trailblazercommunitygroups.com/moscow-ru-developers-group/"
        target="_blank"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <LogoTrailhead/>
      </a>

    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Image/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
