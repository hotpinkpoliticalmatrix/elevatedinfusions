import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Parallax from "./parallax"
import GridContainer from "./GridContainer"
import GridItem from "./GridItem"
import Button from "./button"
import { MdShoppingBasket } from "react-icons/md"
import Img from "gatsby-image"
import landingPageStyle from "../styles/material-kit-react/views/landingPage"
import Typography from "@material-ui/core/Typography"

const Hero = ({ classes, hero }) => {
  return (
    <Parallax filter image={require("../images/mainProducts/assortment.png")}>
      <div className={classes.container}>
        <Img
          className={classes.img}
          fixed={hero.frontmatter.logo.childImageSharp.fluid}
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
              color="warning"
              size="lg"
              href="https://ritual.co/order/elevated-infusions-32nd-st-30th-ave-long-island-city/5974"
              rel="noopener noreferrer"
            >
              <MdShoppingBasket style={{ marginRight: "10px" }} />
              Shop Now
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
}

export default withStyles(landingPageStyle)(Hero)
