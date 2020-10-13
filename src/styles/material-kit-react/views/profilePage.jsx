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
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 767px)": {
      maxWidth: "450px",
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 960px)": {
      maxWidth: "500px",
      width: "100%",
      height: "auto",
    },
  },
  menuContainer: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: warningColor,
    "@media (min-width: 600px)": {
      margin: "0px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "row",
    },
  },
  menuHead: {
    paddingTop: "100px",
    zIndex: "3",
    marginBottom: "20px",
    maxWidth: "200px",
    "@media (min-width: 400px)": {
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 600px)": {
      maxWidth: "220px",
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 960px)": {
      margin: "480px 60px 0",
      maxWidth: "240px",
      width: "100%",
      height: "auto",
      paddingTop: "0",
    },
    "@media (min-width: 1080px)": {
      margin: "500px 60px 25px",
      maxWidth: "300px",
      width: "100%",
      height: "auto",
      paddingTop: "0",
    },
  },
  menu: {
    borderRadius: "15%",
    padding: "13px 13px 35px",
    marginTop: "-10px",
    "@media (min-width: 600px)": {
      maxWidth: "550px",
    },
    "@media (min-width: 960px)": {
      margin: "235px 0 25px",
      padding: "20px",
    },
    "@media (min-width: 1080px)": {
      maxWidth: "700px",
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
