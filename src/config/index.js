module.exports = {
  author: "@hotpinkpoliticalmatrix",
  siteTitle: "Elevated Infusions Bakery",
  siteShortTitle: "Elevate Your Infusions", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Decadent infused creations for celebrations & every-day indulgence.",
  siteUrl: "http://www.elevatedinfusions.com",
  siteLanguage: "en_US",
  siteIcon: "favicon.png", // Relative to gatsby-config file

  splashScreen: true, // Set this to true if you want to use the splash screen

  socialMedia: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/elevateyourinfusions/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/elevateyourinfusions",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Products",
        url: "/#products",
      },
      {
        name: "Reviews",
        url: "/#reviews",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
}
