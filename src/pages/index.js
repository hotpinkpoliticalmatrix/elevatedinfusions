import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/imgGrid"
import { theme } from "../styles/Theme"
import { ThemeProvider } from "@material-ui/core/styles"
import componentsStyle from "../styles/componentsStyle"

const IndexPage = ({ data }) => {
  console.log(data)
  const { classes, ...rest } = this.props

  const products = data.products.edges[0].node.exports.products
  return (
    <Layout>
      <SEO title="Elevated Infusions Bakery" />
      <ThemeProvider theme={theme}>
        <Grid products={products}></Grid>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </ThemeProvider>
    </Layout>
  )
}

export default withStyles(componentsStyle)(IndexPage)

export const pageQuery = graphql`
  {
    products: allMdx(filter: { fileAbsolutePath: { regex: "/products/" } }) {
      edges {
        node {
          exports {
            products {
              img {
                childImageSharp {
                  fluid(maxHeight: 600) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
              cols
            }
          }
        }
      }
    }
    hero: allMdx(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            subtitle
            subtitlePrefix
            title
          }
        }
      }
    }
    reviews: allMdx(filter: { fileAbsolutePath: { regex: "/reviews/" } }) {
      edges {
        node {
          exports {
            reviews {
              author
              date
              path
              title
              videoSourceURL
              videoTitle
            }
          }
          frontmatter {
            title
            subtitle
          }
        }
      }
    }
  }
`
