import React from "react"
import GridItem from "./GridItem"
import GridContainer from "./GridContainer"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import menuTitle from "../images/branding/menu.png"
import logo from "../images/branding/logoBlue.png"
import menu from "../images/mainProducts/menu.jpg"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"

function Menu({ classes }) {
  return (
    <GridContainer className={classes.menuContainer} justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <img src={logo} alt="logo" />
        <img src={menuTitle} className={classes.menuTitle} alt="menuTitle" />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <div>
          <img id="menu" className={classes.menu} src={menu} alt="menu" />
        </div>
      </GridItem>
    </GridContainer>
  )
}

export default withStyles(profilePageStyle)(Menu)
