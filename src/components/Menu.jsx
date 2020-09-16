import React from "react"
import GridItem from "./GridItem"
import GridContainer from "./GridContainer"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import logo from "../images/branding/menuTitle.png"
import menu from "../images/mainProducts/menu.jpg"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"

function Menu({ classes }) {
  return (
    <GridContainer className={classes.menuContainer} justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <div className={classes.menuTitle}>
          <img id="menu" src={logo} alt="logo" />
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <div className={classes.menuDiv}>
          <img src={menu} className={classes.menu} alt="menu" />
        </div>
      </GridItem>
    </GridContainer>
  )
}

export default withStyles(profilePageStyle)(Menu)
