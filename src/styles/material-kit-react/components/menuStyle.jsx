import { container, roseColor } from "../../material-kit-react"

const menuStyle = {
  section: {
    backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0), ${roseColor})`,
    // backgroundColor: roseColor,
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  menuDiv: {
    "@media (min-width: 600px)": {
      maxWidth: "550px",
    },
    "@media (min-width: 1080px)": {
      maxWidth: "700px",
    },
  },
  menuHead: {
    maxWidth: "190px",
    margin: "-60px 0 20px",
    marginLeft: "4px",
    "@media (min-width: 400px)": {
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
    margin: "-40px",
    "@media (min-width: 767px)": {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
    },
  },
  menu: {
    borderRadius: "15%",
    margin: "-20px 0 70px",
  },
}

export default menuStyle
