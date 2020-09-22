import { container, title } from "../../material-kit-react"

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  img: {
    height: "60px",
    minWidth: "290px",
    "@media (min-width: 400px)": {
      minWidth: "360px",
      height: "80px",
    },
    "@media (min-width: 767px)": {
      minWidth: "500px",
      height: "100px",
    },
    "@media (min-width: 960px)": {
      minWidth: "600px",
      height: "120px",
    },
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1rem",
    "@media (min-width: 400px)": {
      fontSize: "1.1rem",
      maxWidth: "500px",
      margin: "5px 6px 0",
    },
    "@media (min-width: 767px)": {
      fontSize: "1.313rem",
    },
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
}

export default landingPageStyle
