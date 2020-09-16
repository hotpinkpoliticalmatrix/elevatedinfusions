import React from "react"
import ImgGallery from "./ImgGallery"
// import ProdIntro from "./prodIntro"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"

import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"

// @material-ui/core components
import Button from "./button"
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
import Img from "gatsby-image"
import logo from "../images/branding/logoBlue.png"
import menu from "../images/mainProducts/menu.jpg"

class IntroContainer extends React.Component {
  render() {
    const { classes, intro, products } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
      classes.logoIcon
    )

    return (
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={logo} alt="logo" className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h1>{intro.frontmatter.title}</h1>
                    <Button justIcon link className={classes.margin5}>
                      <FaTwitter />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <FaInstagram />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <FaFacebook />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <ImgGallery products={products} classes={classes} />
          </div>
        </div>
        <img src={menu} alt="menu" />
        {/* <Img fluid={intro.frontmatter.image.childImageSharp.fluid} /> */}
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(IntroContainer)
