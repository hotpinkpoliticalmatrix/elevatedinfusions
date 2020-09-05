import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
// import tileData from "./tileData"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList({ products }) {
  const classes = useStyles()
  console.log(products)
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {products.map(product => {
          const img = product.img.childImageSharp.fluid
          return (
            <GridListTile key={img.src} cols={product.cols || 1}>
              <Img fluid={img} />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

// import React from "react"
// import { makeStyles } from "@material-ui/core/styles"
// import Paper from "@material-ui/core/Paper"
// import Grid from "@material-ui/core/Grid"
// import Img from "gatsby-image"

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }))

// export default function AutoGrid({ products }) {
//   const classes = useStyles()

//   console.log(products)
//   // const products = props.products
//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs>
//           <Paper className={classes.paper}>
//             <Img fixed={products[0].img.childImageSharp.fluid} />
//           </Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//       </Grid>
//       <Grid container spacing={3}>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }
