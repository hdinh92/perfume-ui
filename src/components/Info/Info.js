import React, { Component } from "react";
import { Link } from "react-router-dom";
class Info extends Component {
  render() {
    return (
      <div className="card purple-gradient mb-4 wow fadeIn">
        {/* Content */}
        <div className="card-body text-white text-center">
          <h4 className="mb-4">
            <strong>VỀ IPERFUME </strong>
          </h4>
          <p>
            <strong>UY TÍN &amp; CHẤT LƯỢNG</strong>
          </p>
          <p className="mb-4">
            <strong>
              Cung cấp sỉ và lẻ các dòng nước hoa cao cấp chính hãng
            </strong>
          </p>
          <Link
            // target="_blank"
            to="/"
            className="btn btn-outline-white btn-md"
          >
            Trải nghiệm nhé
            <i className="fa fa-caret-right ml-2"></i>
          </Link>
        </div>
        {/* Content */}
      </div>
    );
  }
}

export default Info;
