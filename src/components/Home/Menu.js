import React, { useState } from "react"
import Title from "../global/Title"
import Img from "gatsby-image"

export default function Menu({ items }) {
  const [menu, setMenu] = useState({
    items: items.edges,
    categories: [
      "all",
      ...new Set(items.edges.map(edge => edge.node.category)),
    ],
  })

  const [catItems, setCatItems] = useState({
    coffeeItems: items.edges,
  })

  function getCategory(category) {
    return category === "all"
      ? setCatItems({
          coffeeItems: menu.items.filter(item => items.edges),
        })
      : setCatItems({
          coffeeItems: menu.items.filter(
            item => item.node.category === category
          ),
        })
    console.log(menu.items.filter(item => item.node.category === category))
  }

  if (catItems.coffeeItems.length > 0) {
    // console.log(menu.categories)
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Menu" />

          <div className="text-center text-capitalize">
            <h1>Here is our items</h1>
          </div>
          <div className="categories d-flex justify-content-center mx-auto">
            {menu.categories.map(category => {
              return (
                <button
                  key={category}
                  onClick={() => getCategory(category)}
                  className="btn text-uppercase btn-yellow mx-2"
                  value={category}
                >
                  {category}
                </button>
              )
            })}
          </div>
          <div className="container">
            <div className="row">
              {catItems.coffeeItems.map(edge => {
                return (
                  <div
                    key={edge.node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <Img fixed={edge.node.image.fixed} />

                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0 text-yellow">{edge.node.title}</h6>
                        <h6 className="mb-0 text-yellow">${edge.node.price}</h6>
                      </div>
                      <p className="text-muted">
                        <small>
                          {edge.node.description.content[0].content[0].value}
                        </small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  } else
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Menu" />
          <div className="row">
            <div className="col text-capitalize text-center">
              <h1>No items available right now.</h1>
            </div>
          </div>
        </div>
      </section>
    )
}
