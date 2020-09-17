import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import assortmentParallaxStyle from "../styles/material-kit-react/components/assortmentParallaxStyle"

const AssortmentParallax = ({ classes }) => {
  return (
    <div className={classes.filter}>
      <div className={classes.parallaxContainer} />
    </div>
  )
}

export default withStyles(assortmentParallaxStyle)(AssortmentParallax)
