import React from "react"
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="navbar">
        <Link className="nav-links" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="nav-links" to="/credit">
          Credit
        </Link>
      </div>
    </>    
  )
}

export default Menu
