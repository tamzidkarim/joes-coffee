import React from "react"
import { Link } from "gatsby"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">lorem100</p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
