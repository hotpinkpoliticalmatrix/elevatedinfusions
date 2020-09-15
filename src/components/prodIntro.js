import React from "react"
import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"
import classNames from "classnames"
// @material-ui/core components
import Button from "./button"
import withStyles from "@material-ui/core/styles/withStyles"
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
import Img from "gatsby-image"
import logo from "../images/branding/circularLogo.png"

class ProdIntro extends React.Component {
  render() {
    const { classes, intro, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    console.log(intro.frontmatter.logo.childImageSharp.fluid)
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                {/* <img src={logo} /> */}
                {/* <Img
                  fluid={intro.frontmatter.logo.childImageSharp.fluid}
                  alt="..."
                  className={imageClasses}
                /> */}
              </div>
              <div className={classes.name}>
                <h3 className={classes.title}>Christian Louboutin</h3>
                <h6>DESIGNER</h6>
                <Button justIcon link className={classes.margin5}>
                  <FaTwitter />
                </Button>
                <Button justIcon link className={classes.margin5}>
                  <FaInstagram />
                </Button>
                <Button justIcon link className={classes.margin5}>
                  <FaFacebook />
                </Button>
                {/* <Img fluid={intro.frontmatter.childImageSharp.fluid} /> */}
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.description}>
          <p>
            An artist of considerable range, Chet Faker — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure.{" "}
          </p>
        </div>
        <Img
          alt="logo"
          fluid={intro.frontmatter.logo.childImageSharp.fluid}
          className={imageClasses}
        />
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(ProdIntro)
