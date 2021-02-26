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
    const { classes, intro, products, purchase } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
      classes.logoIcon,
      classes.productImg
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
              </GridItem>
            </GridContainer>
            <div className={classes.treetContainer}>
              <img
                src={treet}
                className={classes.treet}
                minWidth="200px"
                alt="treetyourself"
              />
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <Button
                    justIcon
                    href="https://www.instagram.com/elevateyourinfusions"
                    rel="noopener noreferrer"
                    target="_blank"
                    link
                    className={classes.margin5}
                  >
                    <FaInstagram title="Instagram" />
                  </Button>
                  <Button
                    href="https://www.facebook.com/Elevateyourinfusions"
                    rel="noopener noreferrer"
                    target="_blank"
                    justIcon
                    link
                    className={classes.margin5}
                  >
                    <FaFacebook title="Facebook" />
                  </Button>
                  <div className={classes.name}>
                    <div className={classes.description}>
                      <p>
                        {intro.frontmatter.intro} <br />
                        <br />
                        {intro.frontmatter.main} <br />
                      </p>
                      <div className={classes.button}>
                        <a
                          className={classes.buttonText}
                          href={intro.frontmatter.purchaseLink}
                        >
                          {intro.frontmatter.purchaseHeader}
                        </a>
                      </div>
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
