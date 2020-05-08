import React from "react"
import Title from "../global/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact Us" />
      <div className="row">
        <div className="col-10 col-md-6 col-sm-8 mx-auto">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John Smith"
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                email="email"
                id="email"
                placeholder="email@email.com"
              />
              <label htmlFor="description">Description</label>
              <textarea
                type="text-area"
                className="form-control"
                rows="5"
                description="description"
                id="description"
                placeholder="Description"
              />
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
