import {
  container,
  title,
  warningColor,
  primaryBoxShadow,
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
    fontSize: ".85rem",
    lineHeight: "1.4rem",
    margin: "1.3rem .65rem 0",
    textAlign: "justify",
    "@media (min-width: 400px)": {
      fontSize: ".9rem",
      margin: "1.071rem .65rem 0",
      maxWidth: "600px",
      color: warningColor,
    },
    "@media (min-width: 600px)": {
      textAlign: "center !important",
      fontSize: "1rem",
      lineHeight: "1.6rem",
    },
    "@media (min-width: 960px)": {
      width: "600px",
    },
  },
  name: {
    marginTop: "-10px",
    color: warningColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-5px 30px 0px",
    borderRadius: "10px 10px 0px 0px",
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
  treetContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    "@media (min-width: 767px)": {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
  },
  treet: {
    "@media (min-width: 400px)": {
      maxWidth: "350px",
      width: "100%",
      height: "100%",
    },
    "@media (min-width: 767px)": {
      maxWidth: "450px",
    },
    "@media (min-width: 960px)": {
      maxWidth: "500px",
    },
  },
  boxShadow: {
    ...primaryBoxShadow,
  },
  flexContainer: {
    disply: "flex",
    flexWrap: "wrap",
    "@media (min-width: 576px)": {
      display: "flex",
      flexWrap: "nowrap",
    },
  },
}

export default profilePageStyle
