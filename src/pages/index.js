import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import profilePageStyle from "../styles/material-kit-react/views/profilePage"
import IntroContainer from "../components/introContainer"
import Menu from "../components/Menu"
import BrownieParallax from "../components/BrownieParallax"
import AssortmentParallax from "../components/AssortmentParallax"
import Reviews from "../components/reviewCarousel"

const IndexPage = props => {
  const { data, classes } = props
  const products = data.products.edges[0].node.exports.products
  const intro = data.intro.edges[0].node
  const hero = data.hero.edges[0].node
  return (
    <Layout>
      <SEO title="Elevated Infusions Bakery" />
      <Hero hero={hero} classes={classes} />
      <IntroContainer intro={intro} products={products} />
      <BrownieParallax />
      <Menu />
      {/* <AssortmentParallax /> */}
      <Reviews />
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
                    ...GatsbyImageSharpFluid_withWebp_noBase64
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
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            logo {
              childImageSharp {
                fluid(quality: 100) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
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
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            logo {
              childImageSharp {
                fluid(maxHeight: 100, quality: 100) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            intro
            main
            contactIntro
            contact
            titleImg {
              childImageSharp {
                fluid(maxHeight: 200, quality: 100) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`
