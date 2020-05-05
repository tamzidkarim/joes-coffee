import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/global/Background"
import Info from "../components/Home/info"

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
    </Layout>
  )
}

export const query = graphql`
  {
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
