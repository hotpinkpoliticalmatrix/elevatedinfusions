import React from "react"
import Slider from "react-slick"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
import carouselStyle from "../styles/material-kit-react/components/carouselStyle"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function SectionCarousel({ classes }) {
  const data = useStaticQuery(graphql`
    query {
      reviews: allFile(
        filter: { relativeDirectory: { eq: "reviews/images" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      mobileLogo: file(relativePath: { eq: "reviews/reviewsTitle.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      tabletLogo: file(relativePath: { eq: "reviews/reviewsTitle.png" }) {
        childImageSharp {
          fixed(width: 260) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      desktopLogo: file(relativePath: { eq: "reviews/reviewsTitle.png" }) {
        childImageSharp {
          fixed(width: 310) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4900,
    fade: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    draggable: true,
    lazyLoad: true,
    swipe: true,
  }
  const logoSources = [
    data.mobileLogo.childImageSharp.fixed,
    {
      ...data.tabletLogo.childImageSharp.fixed,
      media: `(min-width: 600px)`,
    },
    {
      ...data.desktopLogo.childImageSharp.fixed,
      media: `(min-width: 960px)`,
    },
  ]
  const reviews = data.reviews.edges
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer id="reviews" className={classes.menuContainer}>
          <GridItem xs={10} sm={10} md={6}>
            <Img
              alt="reviews"
              fixed={logoSources}
              className={classes.menuHead}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
            <Slider {...settings} className={classes.carousel}>
              {reviews.map((review, i) => {
                return (
                  <Img
                    className={classes.reviews}
                    alt={review.node.childImageSharp.fluid.src}
                    key={review.node.childImageSharp.fluid.src}
                    fluid={review.node.childImageSharp.fluid}
                  />
                )
              })}
            </Slider>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(carouselStyle)(SectionCarousel)
