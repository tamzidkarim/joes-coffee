import React from "react"
import Product from "./Product"
import Title from "../global/Title"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          price
          title
          image {
            fluid(quality: 100, maxWidth: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Products" />
              <div className="row">
                {data.products.edges.map(node => {
                  return <Product key={node.id} product={node} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
