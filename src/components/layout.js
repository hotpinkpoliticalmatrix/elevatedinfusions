import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeaderLinks from "./headerLinks.jsx"
import Footer from "./Footer"

import Header from "./header"
import "./layout.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const PureLayout = props => {
  return (
    <>
      <Header
        brand="Elevated Infusions"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "primary",
        }}
        siteTitle={props.data.site.siteMetadata.title}
      />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <PureLayout {...props} data={data} />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
