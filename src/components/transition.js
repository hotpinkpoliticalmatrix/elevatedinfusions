import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import parallax2Style from "../styles/material-kit-react/components/parallax2style"

const Transition = ({ classes }) => {
  return (
    <div className={classes.filter}>
      <div className={classes.parallaxContainer} />
    </div>
  )
}

export default withStyles(parallax2Style)(Transition)
