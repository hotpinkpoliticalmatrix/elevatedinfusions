import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Img from "gatsby-image/withIEPolyfill"
import useMediaQuery from "@material-ui/core/useMediaQuery"
// const theme = require("../styles/Theme")

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.main,
  },
  gridList: {
    width: 500,

    [theme.breakpoints.up("sm")]: {
      width: 800,
    },
  },
  gridItem: {
    [theme.breakpoints.up("sm")]: {
      marginTop: -8,
      justifyContent: "center",
      height: 72,
      borderRadius: 3,
      border: 0,
      color: "white",
    },
  },
  imgs: {
    [theme.breakpoints.up("sm")]: {
      height: 72,
    },
    borderRadius: 3,
    border: 0,
    color: "white",
  },
}))

export default function ImageGridList({ products }) {
  const classes = useStyles()
  const medium = useMediaQuery("(min-width:700px)")
  return medium ? (
    <div className={classes.root}>
      <GridList
        id="products"
        cols={3}
        cellHeight={200}
        className={classes.gridList}
        spacing={20}
        padding={0}
      >
        {products.map(product => {
          const img = product.img.childImageSharp.fluid
          return (
            <GridListTile
              className={classes.gridItem}
              key={img.src}
              cols={product.cols || 1}
              borderradius="50px"
            >
              <Img
                fluid={img}
                className="imgs"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  ) : (
    <div id="products" className={classes.root}>
      <GridList
        cols={1}
        cellHeight={200}
        className={classes.gridList}
        spacing={1}
      >
        {products.map(product => {
          const img = product.img.childImageSharp.fluid
          return (
            <GridListTile className={classes.gridItem} key={img.src} cols={1}>
              <Img fluid={img} />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}
