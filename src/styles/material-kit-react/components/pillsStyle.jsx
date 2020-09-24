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
    margin: "-40px 0 -20px",
    "@media (min-width: 400px)": {
      maxWidth: "270px",
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 767px)": {
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 960px)": {
      paddingBottom: "40px",
      maxWidth: "260px",
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
