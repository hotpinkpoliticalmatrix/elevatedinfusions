import { container, title } from "../../../material-kit-react"

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
    maxWidth: "200px",
    zIndex: "3",
    "@media (min-width: 400px)": {
      maxWidth: "350px",
      width: "105%",
      height: "auto",
    },
    "@media (min-width: 767px)": {
      // margin: "200px 40px",
      maxWidth: "450px",
      paddingBottom: "40px",

      width: "105%",
      height: "auto",
    },
    "@media (min-width: 960px)": {
      maxWidth: "500px",
      margin: "150px 0 0 0",
      width: "100%",
      height: "auto",
    },
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    "@media (min-width: 767px)": {
      margin: "0px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "row",
    },
  },
}

export default pillsStyle
