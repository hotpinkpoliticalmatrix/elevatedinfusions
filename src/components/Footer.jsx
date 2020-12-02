/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
import { List, ListItem, withStyles } from "@material-ui/core"
// @material-ui/icons
import { FaInstagram } from "react-icons/fa"
import footerStyle from "../styles/material-kit-react/components/footerStyle"

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            Elevated Infusions
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a
              href="https://www.instagram.com/elevateyourinfusions/"
              rel="noopener noreferrer"
              className={classes.block}
              target="_blank"
            >
              <FaInstagram title="Instagram" />
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}></ListItem>
        </List>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
