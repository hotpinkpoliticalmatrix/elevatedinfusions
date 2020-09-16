import {
  container,
  title,
  warningColor,
  primaryColor,
} from "../../material-kit-react"

import imagesStyle from "../imagesStyles"

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      marginBottom: "-50px",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: warningColor,
    textAlign: "center !important",
  },
  name: {
    marginTop: "-10px",
    color: warningColor,
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-5px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: warningColor,
  },
  navWrapper: {
    margin: "20px 0px 20px 0px",
    textAlign: "center",
  },
  treet: {
    textAlign: "center",
    "& img": {
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  menuTitle: {
    textAlign: "center",
    "& img": {
      maxWidth: "200px",
      // width: "100%",
      height: "auto",
      marginBottom: "-50px",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  menuContainer: {
    backgroundColor: warningColor,
    margin: "0px",
  },
  menu: {
    marginBottom: "10px",
    borderRadius: "10%",
  },
}

export default profilePageStyle
