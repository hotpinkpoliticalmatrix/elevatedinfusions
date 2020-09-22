import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons
import WhatshotIcon from "@material-ui/icons/Whatshot"
import CakeIcon from "@material-ui/icons/Cake"
// core components
import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
import NavPills from "./NavPills.jsx"
import pillsStyle from "../styles/material-kit-react/components/pillsStyle"
import reviewsTitleImg from "../images/branding/reviewsTitle.png"
import Video from "./Video"
class SectionPills extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div id="reviews" className={classes.container}>
          <div id="navigation-pills">
            <GridContainer className={classes.menuContainer}>
              <GridItem xs={10} sm={10} md={6}>
                <img
                  alt="reviews"
                  src={reviewsTitleImg}
                  className={classes.menuHead}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 12, md: 4 },
                    contentGrid: { xs: 12, sm: 12, md: 8 },
                  }}
                  tabs={[
                    {
                      tabButton: "Campfire Burnout",
                      tabIcon: WhatshotIcon,
                      tabContent: (
                        <span>
                          <Video
                            videoSrcURL="https://www.youtube.com/embed/vvJPpgWvGpA?rel=0"
                            videoTitle="Campfire Burnout"
                          />
                          <br />
                        </span>
                      ),
                    },
                    {
                      tabButton: "Funfetti Cupcake",
                      tabIcon: CakeIcon,
                      tabContent: (
                        <span>
                          <Video
                            videoSrcURL="https://www.youtube.com/embed/WfT2MdC6aYw?rel=0"
                            videoTitle="Campfire Burnout"
                          />
                        </span>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(pillsStyle)(SectionPills)
