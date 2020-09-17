import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard"
import Schedule from "@material-ui/icons/Schedule"

// core components
import GridContainer from "./GridContainer.jsx"
import GridItem from "./GridItem.jsx"
import NavPills from "./NavPills.jsx"
import pillsStyle from "../styles/material-kit-react/views/componentsSections/pillsStyle"
import reviewsTitleImg from "../images/branding/reviewsTitle.png"

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer className={classes.menuContainer}>
              <GridItem xs={10} xm={10} md={6}>
                <img
                  alt="reviews"
                  src={reviewsTitleImg}
                  className={classes.menuHead}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 },
                  }}
                  tabs={[
                    {
                      tabButton: "Dashboard",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <p>Reviews go here!</p>
                          <br />
                        </span>
                      ),
                    },
                    {
                      tabButton: "Schedule",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>And another review!</p>
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
