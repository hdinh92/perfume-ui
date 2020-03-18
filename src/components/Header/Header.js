import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import { Link, Route } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
    className: "fa fa-home mr-2"
  },
  {
    name: "Nước hoa nam",
    to: "/male",
    exact: false,
    className: "fa fa-male mr-2"
  },
  {
    name: "Nước hoa nữ",
    to: "/female",
    exact: false,
    className: "fa fa-female mr-2"
  },
  {
    name: "Bảo hành",
    to: "/waranty",
    exact: false,
    className: "fa fa-wrench mr-2"
  },
  {
    name: "Cẩm nang",
    to: "/blog",
    exact: false,
    className: 'fa fa-bolt mr-2'
  }
];
const MenuLink = ({ label, to, activeOnlyWhenExact, className }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active-menu" : "";
        return (
          <li className={`breadcrumb-item  ${active}`}>
            <i className={`${className}`} />
            <Link to={to}>{label} </Link>
          </li>
        );
      }}
    />
  );
};
class Header extends Component {
  render() {
    var { cart } = this.props;
    return (
      <header>
        <SideBar />
        <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
          <div className="float-left">
            <a href="# " data-activates="slide-out" className="button-collapse">
              <i className="fa fa-bars" />
            </a>
          </div>
          <div className="breadcrumb-dn mr-auto">
            <ol className="navbar-nav breadcrumb header-breadcrumb">
              {this.showMenu(menus)}
            </ol>
          </div>
          <ul className="nav navbar-nav nav-flex-icons ml-auto">
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link waves-effect waves-light"
                id="dropdownMenu1"
              >
                <span className="badge red z-depth-1 mr-1">{cart.length}</span>
                <i className="fa fa-shopping-cart" />
                Giỏ hàng
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  showMenu = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            to={menu.to}
            className={menu.className}
            activeOnlyWhenExact={menu.exact}
            label={menu.name}
          ></MenuLink>
        );
      });
    }
    return result;
  };
}

export default withStyles(styles)(Header);
