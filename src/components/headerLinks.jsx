/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// React icons
import { FaFacebook, FaInstagram } from "react-icons/fa"

// core components
import Button from "./button.jsx"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import headerLinksStyle from "../styles/material-kit-react/components/headerLinksStyle"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <AnchorLink color="transparent" to="/" className={classes.navLink}>
          Home
        </AnchorLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <AnchorLink
          color="transparent"
          to="/#products"
          className={classes.navLink}
        >
          Products
        </AnchorLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <AnchorLink color="transparent" to="/#menu" className={classes.navLink}>
          Menu
        </AnchorLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <AnchorLink
          color="transparent"
          to="/#reviews"
          className={classes.navLink}
        >
          Reviews
        </AnchorLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://ritual.co/order/elevated-infusions-32nd-st-30th-ave-long-island-city/5974"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.navLinkBold}
        >
          Shop
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Elevateyourinfusions"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/elevateyourinfusions"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
