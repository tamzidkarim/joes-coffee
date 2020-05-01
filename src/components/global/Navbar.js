import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
// import cart from "../../images/cart.svg"
import { FiShoppingCart } from "react-icons/fi"

export default function Navbar() {
  const [navbar, setNavbar] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  })
  const navbarHandler = () => {
    navbar.navbarOpen
      ? setNavbar({ navbarOpen: false, css: "collapse navbar-collapse" })
      : setNavbar({ navbarOpen: true, css: "collapse navbar-collapse show" })
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={navbar.css}>
        <ul className="navbar-nav mx-auto">
          {navbar.links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className=" nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            {" "}
            {/* <img src={cart} alt="cart" /> */}
            <FiShoppingCart className="cart-icon" />
            {/* Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
          </li>
        </ul>
      </div>
    </nav>
  )
}
