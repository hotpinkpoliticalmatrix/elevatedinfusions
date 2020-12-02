import brownies from "../../../images/mainProducts/browniessmore2.jpg"

const brownieParallaxStyle = {
  parallaxContainer: {
    backgroundImage: `url(${brownies})`,
    minHeight: "300px",
    "@media (min-width: 600px)": {
      minHeight: "400px",
    },
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
    zIndex: "-1;",
  },
  filter: {
    backdropFilter: "grayscale(0.5) opacity(0.8)",
  },
}

export default brownieParallaxStyle
