import React, { Component } from "react";

import logo from "../../images/icons/logo-sm.png";
import sech from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import HeaderLink from "./HeaderLink";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a className="navbar-brand mx-auto" href="#">
                <img src={logo} />
              </a>

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <HeaderLink LinkName="Mac" LinkUrl="/" />
                  <HeaderLink LinkName="iphone" LinkUrl="/" />
                  <HeaderLink LinkName="ipad" LinkUrl="/" />
                  <HeaderLink LinkName="watch" LinkUrl="/" />
                  <HeaderLink LinkName="tv" LinkUrl="/" />
                  <HeaderLink LinkName="Mac" LinkUrl="/" />
                  <HeaderLink LinkName="Music" LinkUrl="/" />

                  <HeaderLink LinkName="Support" LinkUrl="/#" />
                  <HeaderLink img={sech} LinkUrl="/" />
                  <HeaderLink img={cart} LinkUrl="/" />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
