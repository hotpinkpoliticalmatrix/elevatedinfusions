import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { splashScreen } from "../config"
import Grid from "../components/imgGrid"

const IndexPage = ({ data }) => {
  console.log(data)
  const products = data.products.edges[0].node.exports.products
  return (
    <Layout splashScreen={splashScreen}>
      <SEO title="Elevated Infusions Bakery" />
      <Grid products={products}></Grid>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

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
