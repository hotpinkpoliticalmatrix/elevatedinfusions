import React from "react"
import GridItem from "./GridItem"
import GridContainer from "./GridContainer"
import withStyles from "@material-ui/core/styles/withStyles"
// import logo from "../images/branding/menuLogo.webp"
// import menu from "../images/mainProducts/menu.webp"
import menuStyle from "../styles/material-kit-react/components/menuStyle"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function Menu({ classes }) {
  const data = useStaticQuery(graphql`
    query {
      mobileLogo: file(relativePath: { eq: "menu/menuLogo.png" }) {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      tabletLogo: file(relativePath: { eq: "menu/menuLogo.png" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      desktopLogo: file(relativePath: { eq: "menu/menuLogo.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      menu: file(relativePath: { eq: "menu/menu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileMenu: file(relativePath: { eq: "menu/mobMenu.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const logoSources = [
    data.mobileLogo.childImageSharp.fixed,
    {
      ...data.tabletLogo.childImageSharp.fixed,
      media: `(min-width: 600px)`,
    },
    {
      ...data.desktopLogo.childImageSharp.fixed,
      media: `(min-width: 960px)`,
    },
  ]
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.menuContainer} justify="center">
          <GridItem xs={10} sm={10} md={4} className={classes.logoContainer}>
            <Img className={classes.menuHead} fixed={logoSources} alt="logo" />
          </GridItem>
          <GridItem xs={11} sm={11} md={10} className={classes.menuDiv}>
            {/* <div className=> */}
            <Img
              fluid={data.mobileMenu.childImageSharp.fluid}
              id="menu"
              className={classes.menu}
              alt="menu"
            />
            {/* </div> */}
          </GridItem>{" "}
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(menuStyle)(Menu)
