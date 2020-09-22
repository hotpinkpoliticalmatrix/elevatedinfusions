import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
import NavPills from "./NavPills.jsx"
// @material-ui/icons
import CakeIcon from "@material-ui/icons/Cake"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import GradeIcon from "@material-ui/icons/Grade"
import MoodIcon from "@material-ui/icons/Mood"
import Img from "gatsby-image"

import profilePageStyle from "../styles/material-kit-react/views/profilePage"

class ImgGallery extends React.Component {
  render() {
    const { products, classes } = this.props
    const cupcakes = products.filter(product => product.name === "Cupcakes")
    const brownies = products.filter(product => product.name === "Brownies")
    const cerealSeries = products.filter(
      product => product.name === "CerealSeries"
    )
    const specials = products.filter(product => product.name === "Specials")
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
    return (
      <GridContainer id="products" justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "Cupcakes",
                tabIcon: CakeIcon,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={10} sm={10} md={4} lg={4}>
                      {" "}
                      <Img
                        alt="..."
                        fluid={cupcakes[0].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cupcakes[8].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cupcakes[6].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                    </GridItem>
                    <GridItem xs={10} sm={10} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={cupcakes[2].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cupcakes[1].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cupcakes[7].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={10} sm={10} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={cupcakes[4].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cupcakes[5].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cupcakes[3].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                    </GridItem>
                  </GridContainer>
                ),
              },
              {
                tabButton: "Brownies",
                tabIcon: MoodIcon,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={brownies[0].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                      <Img
                        alt="..."
                        fluid={brownies[5].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                      <Img
                        alt="..."
                        fluid={brownies[2].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={brownies[3].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                      <Img
                        alt="..."
                        fluid={brownies[4].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                      <Img
                        alt="..."
                        fluid={brownies[8].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={brownies[6].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                      <Img
                        alt="..."
                        fluid={brownies[1].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                      <Img
                        alt="..."
                        fluid={brownies[7].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                    </GridItem>
                  </GridContainer>
                ),
              },
              {
                tabButton: "Cereal Series",
                tabIcon: FlashOnIcon,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={cerealSeries[8].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cerealSeries[3].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cerealSeries[4].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={cerealSeries[2].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cerealSeries[0].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                      <Img
                        alt="..."
                        fluid={cerealSeries[7].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={cerealSeries[1].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cerealSeries[5].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={cerealSeries[6].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                    </GridItem>
                  </GridContainer>
                ),
              },
              {
                tabButton: "Specials",
                tabIcon: GradeIcon,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={specials[0].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />{" "}
                      <Img
                        alt="..."
                        fluid={specials[1].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={specials[8].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={specials[2].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={specials[3].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={specials[5].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                      <Img
                        alt="..."
                        fluid={specials[7].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                      <Img
                        alt="..."
                        fluid={specials[6].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />

                      <Img
                        alt="..."
                        fluid={specials[4].img.childImageSharp.fluid}
                        className={navImageClasses}
                      />
                    </GridItem>
                  </GridContainer>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(profilePageStyle)(ImgGallery)
