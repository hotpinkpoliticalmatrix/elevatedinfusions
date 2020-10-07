import React from "react"
// react component for creating beautiful carousel
import Slider from "react-slick"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
import carouselStyle from "../styles/material-kit-react/components/carouselStyle"
import reviews1 from "../content/reviews/images/reviews1.gif"
import reviewsTitleImg from "../images/branding/reviewsTitle.webp"
import reviews2 from "../content/reviews/images/reviews2.gif"
import reviews3 from "../content/reviews/images/reviews3.gif"
import reviews4 from "../content/reviews/images/reviews4.gif"
import reviews5 from "../content/reviews/images/reviews5.gif"
import reviews6 from "../content/reviews/images/reviews6.gif"
import reviews7 from "../content/reviews/images/reviews7.gif"
import reviews8 from "../content/reviews/images/reviews8.gif"
import reviews9 from "../content/reviews/images/reviews9.gif"
import reviews10 from "../content/reviews/images/reviews10.gif"

class SectionCarousel extends React.Component {
  render() {
    const reviews = [
      reviews1,
      reviews2,
      reviews3,
      reviews4,
      reviews5,
      reviews6,
      reviews7,
      reviews8,
      reviews9,
      reviews10,
    ]
    console.log(reviews)
    const { classes } = this.props
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 4900,
      fadeIn: false,
      autoplay: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      arrows: true,
      draggable: true,
      lazyLoad: true,
      swipe: true,
    }
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.menuContainer}>
            <GridItem xs={10} sm={10} md={6}>
              <img
                id="reviews"
                alt="reviews"
                src={reviewsTitleImg}
                className={classes.menuHead}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
              <Slider {...settings} className={classes.carousel}>
                {reviews.map((review, i) => {
                  return <img src={review} alt={i} width="100%" />
                })}
              </Slider>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(carouselStyle)(SectionCarousel)
