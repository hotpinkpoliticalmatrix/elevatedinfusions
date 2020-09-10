// require = require("esm")(module)
// import { createMuiTheme } from "@material-ui/core/styles"
const { createMuiTheme } = require("@material-ui/core/styles")

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#303F75",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#81c071",
      main: "#518F44",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    tertiary: {
      main: "#EFA560", //tan
    },
    warning: {
      main: "#1B6255", //dark green
    },
    background: {
      main: "#ffffff",
    }, //white
    backgroundSecondary: {
      main: "D4E4BC", //tea green
    },

    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  breakpoints: {
    // values: {
    xs: 0,
    sm: 700,
    md: 960,
    lg: 1280,
    xl: 1920,
    // },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },
  borderRadius: "1rem",
  pageWidth: "100rem",
  headerHeight: "6.25rem",
  footerHeight: "7.5rem",
})

module.exports = theme
