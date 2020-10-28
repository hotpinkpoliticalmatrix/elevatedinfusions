import { container } from "../../material-kit-react"
import assortment from "../../../images/mainProducts/assortment3.png"

const carouselStyle = {
  section: {
    padding: "70px 0",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    backgroundImage: `url(${assortment})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    zIndex: "-1;",
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  menuHead: {
    maxWidth: "200px",
    marginBottom: "20px",
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
  carousel: {
    "@media (min-width: 400px)": {
      padding: "0 25px",
    },
  },
  reviews: {
    borderRadius: "40px",
  },
}

export default carouselStyle
