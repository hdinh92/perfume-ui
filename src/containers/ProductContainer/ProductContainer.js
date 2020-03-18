import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import Products from "../../components/Products/Products";
import * as Actions from "../../actions/index";
import GlobalLoading from "../../components/GlobalLoading/GlobalLoading";
import NewsComponent from "../NewsComponent/NewsComponent";
class ProductContainer extends Component {
  state = {
    currentPage: 1,
    productsPerPage: 6,
    isPrevBtnActive: "d-none",
    isNextBtnActive: ""
  };
  handleClick = event => {
    let listid = Number(event.target.id);
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(this.props.products / this.state.productsPerPage);
    this.setState({ isNextBtnActive: "d-none" });
    this.setState({ isPrevBtnActive: "d-none" });
    if (listid > 1 && totalPage > 1) {
      this.setState({ isPrevBtnActive: "" });
    } else if (listid === 1) {
      this.setState({ isNextBtnActive: "" });
    } else if (listid > 1) {
      this.setState({ isNextBtnActive: "" });
      this.setState({ isPrevBtnActive: "" });
    }
  }
  btnPrevClick = () => {
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };
  btnNextClick = () => {
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  };

  render() {
    var { products, keyword } = this.props;
    var {
      currentPage,
      productsPerPage,
      isNextBtnActive,
      isPrevBtnActive
    } = this.state;
    var indexOfLastProduct = currentPage * productsPerPage;
    var indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    var currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    var pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      if (currentPage === number) {
        return (
          <li key={number} className="page-item active" id={number}>
            <a
              className="page-link"
              href="# "
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </a>
          </li>
        );
      } else {
        return (
          <li key={number} className="page-item" id={number}>
            <a
              className="page-link"
              href="# "
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </a>
          </li>
        );
      }
    });

    var renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <li className={`page-item ${isNextBtnActive}`}>
          <a className="page-link" href="# " aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      );
    } else {
      renderNextBtn = (
        <li className={`page-item ${isNextBtnActive}`}>
          <a
            className="page-link"
            href="# "
            aria-label="Next"
            onClick={this.btnNextClick}
          >
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      );
    }

    var renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <li className={`page-item ${isPrevBtnActive}`}>
          <a className="page-link" href="# " aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
      );
    } else {
      renderPrevBtn = (
        <li className={`page-item ${isPrevBtnActive}`}>
          <a
            className="page-link"
            href="# "
            aria-label="Previous"
            onClick={this.btnPrevClick}
          >
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
      );
    }

    currentProducts = currentProducts.filter(product => {
      return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    if (!products.length) {
      return <GlobalLoading />;
    }
    return (
      <React.Fragment>
        <Products>{this.showProduct(currentProducts)}</Products>
        <div className="d-flex justify-content-center wow fadeIn mb-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination pg-blue text-center">
              {renderPrevBtn}
              {renderPageNumbers}
              {renderNextBtn}
            </ul>
          </nav>
        </div>
        <NewsComponent />
      </React.Fragment>
    );
  }
  showProduct = products => {
    var { onAddToCart } = this.props;
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={onAddToCart}
          ></Product>
        );
      });
    }
    return result;
  };

  componentDidMount() {
    this.props.onShowProduct();
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    keyword: state.search
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onShowProduct: () => {
      dispatch(Actions.actFetchProductsRequest());
    },
    onAddToCart: product => {
      dispatch(Actions.actAddToCart(product, 1));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
