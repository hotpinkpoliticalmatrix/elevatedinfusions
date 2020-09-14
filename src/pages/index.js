import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/imgGrid"
import { theme } from "../styles/Theme"
import { ThemeProvider } from "@material-ui/core/styles"
import landingPageStyle from "../styles/material-kit-react/views/landingPage"
import Hero from "../components/Hero"

const IndexPage = props => {
  const { data, classes, ...rest } = props
  console.log(props)

  const products = data.products.edges[0].node.exports.products
  const hero = data.hero.edges[0].node
  return (
    <Layout>
      <SEO title="Elevated Infusions Bakery" />
      <ThemeProvider theme={theme} classes={classes}>
        <Hero hero={hero} classes={classes} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Grid products={products} />
          </div>
        </div>
      </ThemeProvider>
    </Layout>
  )
}

export default withStyles(landingPageStyle)(IndexPage)

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
            image {
              childImageSharp {
                fluid {
                  base64
                  src
                }
              }
            }
            logo {
              childImageSharp {
                fluid(quality: 100, maxHeight: 100) {
                  base64
                  src
                }
              }
            }
            title
            subtitlePrefix
            subtitle
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
