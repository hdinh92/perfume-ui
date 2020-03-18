import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";

class SideBar extends Component {
  render() {
    return (
      <ul
        id="slide-out"
        className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default"
        data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a"
      >
        <li>
          <div className="logo-wrapper waves-light waves-effect waves-light">
            <a href="# ">
              <img
                src="http://mdbootstrap.com/img/logo/mdb-transparent.png"
                alt=""
                className="img-fluid flex-center"
              />
            </a>
          </div>
        </li>
        <li>
          <ul className="social">
            <li>
              <a href="# " className="icons-sm fb-ic">
                <i className="fa fa-facebook"> </i>
              </a>
            </li>
            <li>
              <a href="# " className="icons-sm pin-ic">
                <i className="fa fa-pinterest"> </i>
              </a>
            </li>
            <li>
              <a href="# " className="icons-sm gplus-ic">
                <i className="fa fa-google-plus"> </i>
              </a>
            </li>
            <li>
              <a href="# " className="icons-sm tw-ic">
                <i className="fa fa-twitter"> </i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <SearchContainer></SearchContainer>
        </li>
        <li>
          {/* menu router */}
          <ul className="collapsible collapsible-accordion">
            <li>
              <Link
                to="/"
                className="collapsible-header waves-effect arrow-r active"
              >
                <i className="fa fa-dashboard" /> Trang chủ
              </Link>
            </li>
            <li>
              <Link to="" className="collapsible-header waves-effect">
                <i className="fa fa-shopping-bag" /> Sản phẩm
                <i className="fa fa-angle-down rotate-icon"></i>
              </Link>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <Link to="/male" className="waves-effect">
                      Nước hoa cho nam
                    </Link>
                  </li>
                  <li>
                    <Link to="/female" className="waves-effect">
                      Nước hoa cho nữ
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/cart" className="collapsible-header waves-effect ">
                <i className="fa fa-shopping-cart" /> Xem giỏ hàng
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="collapsible-header waves-effect arrow-r"
              >
                <i className="fa fa-desktop" /> Tin khuyến mãi
              </Link>
            </li>
          </ul>
        </li>

        {/* SKIN */}
        <div className="sidenav-bg mask-strong" />
        <div className="ps__scrollbar-x-rail">
          <div className="ps__scrollbar-x" tabIndex={0} />
        </div>
        <div className="ps__scrollbar-y-rail">
          <div className="ps__scrollbar-y" tabIndex={0} />
        </div>
      </ul>
    );
  }
}

export default SideBar;
