import React, { useState } from "react"
import { Link } from "gatsby"
import Title from "../global/Title"

export default function Info() {
  const [info, setInfo] = useState({
    title: "Our Story",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum rerum odio exercitationem facere dolores natus mollitia vel cupiditate ipsum, numquam voluptatibus dicta consectetur expedita laboriosam debitis quo deleniti molestias repellendus aperiam, fugiat id enim molestiae! Ad, aliquid explicabo sequi optio accusantium delectus nulla labore, laudantium sit qui ipsa, quos earum aut cupiditate molestiae saepe assumenda quam mollitia temporibus culpa. Perferendis velit consequuntur maxime tenetur repellendus recusandae totam aut neque! Accusamus blanditiis, dolorem temporibus delectus id impedit rem provident, ipsum ab explicabo nemo commodi quaerat fugiat est error sapiente consectetur illum eaque, doloribus sequi. Temporibus accusantium fugiat ipsa dolorem alias!",
  })
  return (
    <section className="py-5">
      <div className="container">
        <Title title={info.title} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">{info.message}</p>
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
