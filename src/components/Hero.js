import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Parallax from "./parallax"
import GridContainer from "./GridContainer"
import GridItem from "./GridItem"
import Button from "./button"
import { FaPlay } from "react-icons/fa"
import Img from "gatsby-image"
import landingPageStyle from "../styles/material-kit-react/views/landingPage"
import Typography from "@material-ui/core/Typography"

const Hero = ({ classes, hero }) => {
  console.log(hero)
  return (
    <Parallax filter image={require("../images/mainProducts/assortment.png")}>
      <div className={classes.container}>
        <Img
          className={classes.img}
          fixed={hero.frontmatter.logo.childImageSharp.fixed}
        />
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Typography
              className={classes.subtitle}
              display="block"
              gutterBottom
            >
              {hero.frontmatter.subtitlePrefix}{" "}
              <span>{hero.frontmatter.subtitle}</span>
            </Typography>
            <br />
            <Button
              color="danger"
              size="lg"
              href="/reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay />
              See our reviews
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
}

export default withStyles(landingPageStyle)(Hero)
