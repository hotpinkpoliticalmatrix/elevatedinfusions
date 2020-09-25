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
    marginTop: "-40px",
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
      maxWidth: "350px",
      width: "100%",
      height: "auto",
    },
  },
  menuContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    "@media (min-width: 767px)": {
      margin: "0px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
  },
  reviews: {
    maxWidth: "300px",
    "@media (min-width: 400px)": {
      maxWidth: "360px",
    },
    "@media (min-width: 500px)": {
      maxWidth: "460px",
    },
    // "@media (min-width: 600px)": {
    //   maxWidth: "560px",
    // },
    "@media (min-width: 767px)": {
      maxWidth: "680px",
    },
  },
}

export default pillsStyle
