import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons
import WhatshotIcon from "@material-ui/icons/Whatshot"
import CakeIcon from "@material-ui/icons/Cake"
// core components
import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
import pillsStyle from "../styles/material-kit-react/components/pillsStyle"
import reviewsTitleImg from "../images/branding/reviewsTitle.webp"
import reviews from "../images/mainProducts/Reviews.png"
class SectionPills extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div id="reviews" className={classes.container}>
          <div id="navigation-pills">
            <GridContainer className={classes.menuContainer}>
              <GridItem xs={10} sm={10} md={6}>
                <img
                  alt="reviews"
                  src={reviewsTitleImg}
                  className={classes.menuHead}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <img src={reviews} className={classes.reviews} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(pillsStyle)(SectionPills)
