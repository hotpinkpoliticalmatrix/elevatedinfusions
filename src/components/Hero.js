import React from "react"
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

import Parallax from "./parallax"
import GridContainer from "./GridContainer"
import GridItem from "./GridItem"
import Button from "./button"
import { FaPlay } from "react-icons/fa"
import landingPageStyle from "../styles/material-kit-react/views/landingPage"

const Hero = ({ classes, hero }) => {
  console.log(hero, classes)
  return (
    <Parallax filter image={require("../images/mainProducts/assortment.png")}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>{hero.frontmatter.title}</h1>
            <h4>
              {hero.frontmatter.subtitlePrefix}{" "}
              <span>{hero.frontmatter.subtitle}</span>
            </h4>
            <br />
            <Button
              color="danger"
              size="lg"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay />
              Watch video
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
}

export default withStyles(landingPageStyle)(Hero)
