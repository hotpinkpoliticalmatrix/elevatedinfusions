import { container, title, warningColor } from "../../material-kit-react"

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
      // margin: "200px 40px",
      maxWidth: "450px",
      // paddingBottom: "40px",

      width: "105%",
      height: "auto",
    },
    "@media (min-width: 960px)": {
      maxWidth: "500px",
      // margin: "150px 0 0 0",
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
    "@media (min-width: 767px)": {
      // paddingTop: "100px",
      margin: "0px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "row",
    },
  },
  menuHead: {
    paddingTop: "150px",
    zIndex: "3",
    marginBottom: "50px",
    "@media (min-width: 400px)": {
      maxWidth: "225px",
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 767px)": {
      maxWidth: "270px",
      width: "105%",
      height: "auto",
      marginBottom: "50px",
      paddingTop: "100px",
    },
    "@media (min-width: 960px)": {
      maxWidth: "450px",
      margin: "150px 40px",
      width: "100%",
      height: "auto",
      paddingTop: "0",
    },
  },
  menu: {
    borderRadius: "15%",
    zIndex: "1",
    padding: "40px",
    marginTop: "-60px",
    "@media (min-width: 767px)": {
      padding: "20px",
    },
    "@media (min-width: 960px)": {
      padding: "100px",
    },
  },
}

export default profilePageStyle
