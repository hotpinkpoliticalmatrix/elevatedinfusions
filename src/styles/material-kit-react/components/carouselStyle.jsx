import { container } from "../../material-kit-react"

const carouselStyle = {
  section: {
    padding: "70px 0",
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  menuHead: {
    maxWidth: "200px",
    margin: "240px 0 20px",
    "@media (min-width: 400px)": {
      marginTop: "160px",
      maxWidth: "250px",
      width: "105%",
      height: "auto",
    },
  },
  menuContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    "@media (min-width: 767px)": {
      margin: "0px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
    },
  },
  carousel: {
    padding: "0 25px",
  },
  reviews: {
    borderRadius: "40px",
  },
}

export default carouselStyle
