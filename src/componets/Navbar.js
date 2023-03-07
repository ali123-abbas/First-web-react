import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

const hello = {
  name: "sajid",
};

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="Home.js" className="logo">
                  <img src={logo} />
                </a>
                <ul className="nav">
                  <li>
                    <a
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <Link to="/explore">Explore</Link>
                  </li>
                  <li>
                    <Link to="/items">Item Details</Link>
                  </li>
                  <li>
                    <Link to="/Author">Author</Link>
                  </li>
                  <li>
                    <Link to="/create">Create Yours</Link>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
              <Outlet />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
