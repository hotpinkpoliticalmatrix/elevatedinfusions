import React from "react"
import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"
import classNames from "classnames"
// @material-ui/core components
import Button from "./button"
import withStyles from "@material-ui/core/styles/withStyles"
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

class ProdIntro extends React.Component {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <div>
              {/* <img src={profile} alt="..." className={imageClasses} /> */}
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
            </div>
          </div>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(profilePageStyle)(ProdIntro)
