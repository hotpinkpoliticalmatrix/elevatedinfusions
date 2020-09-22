import { container, title } from "../../material-kit-react"

const pillsStyle = {
  section: {
    paddingTop: "250px",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  menuHead: {
    maxWidth: "250px",
    // zIndex: "3",
    margin: "140px 0 -15px",
    "@media (min-width: 400px)": {
      maxWidth: "350px",
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 767px)": {
      paddingBottom: "40px",

      width: "105%",
      height: "auto",
    },
    "@media (min-width: 960px)": {
      maxWidth: "370px",
      margin: "150px 0 0 0",
      width: "100%",
      height: "auto",
    },
  },
  menuContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    "@media (min-width: 767px)": {
      margin: "0px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
  },
  video: {
    maxWidth: "300px",
  },
}

export default pillsStyle
