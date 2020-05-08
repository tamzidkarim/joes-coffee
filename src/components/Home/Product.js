import React from "react"
import Img from "gatsby-image"

export default function Product({ product }) {
  console.log(product.node.image.fluid)
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.node.image.fluid}></Img>
        <div className="card-body text-center">
          <h6>{product.node.title}</h6>
          <h6>${product.node.price}</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
