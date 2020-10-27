import { container, warningColor } from "../../material-kit-react"

const menuStyle = {
  section: {
    // padding: "70px 0",
    // "&:before": {
    //   background: "rgba(0, 0, 0, 0.5)",
    // },
    // backgroundImage: `url(${assortment})`,
    // minHeight: "700px",
    // backgroundAttachment: "fixed",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    backgroundColor: warningColor,
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    // zIndex: "-1;",
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
    maxWidth: "200px",
    margin: "-100px 0 20px",
    paddingTop: "100px",
    maxWidth: "200px",
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
    "@media (min-width: 767px)": {
      margin: "0px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
    },
  },
  menu: {
    borderRadius: "15%",
    margin: "-10px 0 30px",
  },
}

export default menuStyle
