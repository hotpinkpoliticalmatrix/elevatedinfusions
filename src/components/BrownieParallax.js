import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import brownieParallaxStyle from "../styles/material-kit-react/components/browniesParallaxStyle"

const BrownieParallax = ({ classes }) => {
  return (
    <div className={classes.filter}>
      <div className={classes.parallaxContainer} />
    </div>
  )
}

export default withStyles(brownieParallaxStyle)(BrownieParallax)
