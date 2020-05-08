import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/global/Background"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Background
        img={data.img.childImageSharp.fluid}
        title="Joe's Coffee"
        styleClass="default-background"
      />
      <Info />
      <Menu items={data.menu} />
      <Products />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            content {
              content {
                value
              }
            }
          }
          price
          category
          image {
            fixed(quality: 100, width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    img: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
