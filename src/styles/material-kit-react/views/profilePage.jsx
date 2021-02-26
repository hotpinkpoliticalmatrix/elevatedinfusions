import {
  container,
  title,
  warningColor,
  primaryBoxShadow,
  grayColor,
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: ".85rem",
    lineHeight: "1.3rem",
    margin: "1.3rem .8rem 0",
    textAlign: "justify",
    "@media (min-width: 400px)": {
      lineHeight: "1.4rem",

      fontSize: ".9rem",
      margin: "1.071rem .9rem 0",
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
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "135px",
    height: "48px",
    backgroundColor: warningColor,
    boxShadow:
      "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: grayColor,
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle",
    },
    "&,&:visited": {
      color: "#FFFFFF",
    },
  },
  buttonText: {
    "&,&:focus,&:hover,&:visited": {
      color: "#ffffff",
      textDecoration: "none",
      fontWeight: 600,
    },
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
      maxWidth: "320px",
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
