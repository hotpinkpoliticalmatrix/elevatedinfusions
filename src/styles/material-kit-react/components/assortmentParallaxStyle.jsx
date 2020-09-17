import assortment from "../../../images/mainProducts/assortment3.jpg"

const assortmentParallaxStyle = {
  parallaxContainer: {
    backgroundImage: `url(${assortment})`,

    /* Set a specific height */
    minHeight: "600px",

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
}

export default assortmentParallaxStyle