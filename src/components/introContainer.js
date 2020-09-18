import React from "react"
import ImgGallery from "./ImgGallery"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"

import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
// @material-ui/core components
import Button from "./button"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import logo from "../images/branding/logoBlue.png"
import treet from "../images/branding/treetyourself.png"

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
                  <img src={logo} alt="logo" className={imageClasses} />
                </div>
                <img
                  src={treet}
                  className={classes.treet}
                  maxWidth="600px"
                  alt="treetyourself"
                />

                <div className={classes.profile}>
                  <div className={classes.name}>
                    <Button justIcon link className={classes.margin5}>
                      <FaInstagram />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <FaFacebook />
                    </Button>
                    <div className={classes.description}>
                      <p>{intro.frontmatter.intro} </p>
                    </div>
                    <div className={classes.description}>
                      <p>{intro.frontmatter.main} </p>
                    </div>
                  </div>
                </div>
              </GridItem>
            </GridContainer>

            <ImgGallery products={products} classes={classes} />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(profilePageStyle)(IntroContainer)
