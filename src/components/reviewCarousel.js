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
import reviews1 from "../content/reviews/images/1.webp"
import reviewsTitleImg from "../images/branding/reviewsTitle.webp"
import reviews2 from "../content/reviews/images/2.webp"
import reviews3 from "../content/reviews/images/3.webp"
import reviews4 from "../content/reviews/images/4.webp"
import reviews5 from "../content/reviews/images/5.webp"
import reviews6 from "../content/reviews/images/6.webp"
import reviews7 from "../content/reviews/images/7.webp"
import reviews8 from "../content/reviews/images/8.webp"
import reviews9 from "../content/reviews/images/9.webp"
import reviews10 from "../content/reviews/images/10.webp"

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
    const { classes } = this.props
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
                  return (
                    <img className={classes.reviews} alt={i} src={review} />
                  )
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
