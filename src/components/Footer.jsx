/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
import { List, ListItem, withStyles } from "@material-ui/core"
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite"
import { FaInstagram, HiOutlineMail } from "react-icons/fa"
import EmailIcon from "@material-ui/icons/Email"
import footerStyle from "../styles/material-kit-react/components/footerStyle"

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              Elevated Infusions
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.instagram.com/elevateyourinfusions/"
                className={classes.block}
                target="_blank"
              >
                <FaInstagram />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              {/* <a
                href="https://www.instagram.com/elevateyourinfusions/"
                className={classes.block}
                target="_blank"
              >
                <HiOutlineMail />
              </a> */}
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://staceyeliuk.dev"
            className={aClasses}
            target="_blank"
          >
            hotPinkPoliticalMatrix
          </a>{" "}
          .
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
