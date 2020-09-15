import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import "typeface-roboto"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../styles/Theme"
import { ThemeProvider } from "@material-ui/core/styles"
// import landingPageStyle from "../styles/material-kit-react/views/landingPage"
import Hero from "../components/Hero"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"
import IntroContainer from "../components/introContainer"

const IndexPage = props => {
  const { data, classes } = props
  console.log(data)
  const products = data.products.edges[0].node.exports.products
  const intro = data.intro.edges[0].node
  const hero = data.hero.edges[0].node
  return (
    <Layout>
      <SEO title="Elevated Infusions Bakery" />
      <ThemeProvider theme={theme}>
        <Hero hero={hero} classes={classes} />
        <IntroContainer intro={intro} products={products} />
      </ThemeProvider>
    </Layout>
  )
}

export default withStyles(profilePageStyle)(IndexPage)

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
              name
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
                fluid(maxHeight: 300) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            logo {
              childImageSharp {
                fixed(height: 140, quality: 100) {
                  aspectRatio
                  base64
                  height
                  src
                  width
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
    intro: allMdx(filter: { fileAbsolutePath: { regex: "/intro/" } }) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                fluid(quality: 100) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            logo {
              childImageSharp {
                fluid(maxHeight: 100, quality: 100) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            body
            contactIntro
            contact
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
