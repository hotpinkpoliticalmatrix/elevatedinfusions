import brownies from "../../../images/mainProducts/browniessmore2.jpg"

const parallax2Style = {
  parallaxContainer: {
    backgroundImage: `url(${brownies})`,

    /* Set a specific height */
    minHeight: "300px",

    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "0.5",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    position: "absolute",
    zIndex: "-1;",
  },
  filter: {
    backdropFilter: "grayscale(0.5) opacity(0.8)",
  },
  // filter: {
  //   "&:before": {
  //     background: "rgba(0, 0, 0, 0.5)",
  //   },
  //   "&:after,&:before": {
  //     position: "absolute",
  //     zIndex: "1",
  //     width: "100%",
  //     height: "100%",
  //     display: "block",
  //     left: "0",
  //     top: "0",
  //     content: "''",
  //   },
  // },
}

export default parallax2Style
