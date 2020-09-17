import React from "react"
import GridItem from "./GridItem"
import GridContainer from "./GridContainer"
import withStyles from "@material-ui/core/styles/withStyles"
import logo from "../images/branding/menu.png"
import menu from "../images/mainProducts/menu.jpg"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"
import Parallax from "./parallax"

function Menu({ classes }) {
  return (
    <GridContainer className={classes.menuContainer} justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <img className={classes.menuHead} src={logo} alt="logo" />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <div className={classes.menuDiv}>
          <img src={menu} id="menu" className={classes.menu} alt="menu" />
        </div>
      </GridItem>{" "}
    </GridContainer>
  )
}

export default withStyles(profilePageStyle)(Menu)
