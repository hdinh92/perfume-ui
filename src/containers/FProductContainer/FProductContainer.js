import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./../../actions/index";
import Product from "../../components/Product/Product";
import Products from "../../components/Products/Products";
import GlobalLoading from "../../components/GlobalLoading/GlobalLoading";
class FProductContainer extends Component {
  state = {
    currentPage: 1,
    productsPerPage: 6
  };
  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };
  render() {
    var { products } = this.props;
    products = products.filter(product => {
      return product.status === false;
    });
    var { currentPage, productsPerPage } = this.state;
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
            <a className="page-link" href="# " id={number}>
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
    if (!products.length) {
      return <GlobalLoading />;
    }
    return (
      <div className="container">
        {/*Section: Cards*/}
        <section className="pt-4">
          <div className="wow fadeIn">
            {/*Section heading*/}
            <h2 className="h1 text-center mb-3">NƯỚC HOA CHO NỮ</h2>
            {/*Section description*/}
            <p className="text-center">
              Không phải không có lí do mà từ xưa, phụ nữ đã được ví như một đóa
              hoa. Rực rỡ, mong manh, dịu dàng, đằm thắm. Mỗi loại hoa lại mang
              cho mình một phong cách và cảm nhận riêng biệt. Đã là hoa thì phải
              thơm. Đã là phụ nữ, không thể nào thiếu đi một mùi hương cho riêng
              mình. Nhưng vì sao nước hoa lại cần thiết đến thế?
            </p>
            <p className="text-center mb-3 pb-5">
            Mời các bạn tham khảo các dòng nước hoa nữ đang có của Iperfume
            </p>
          </div>
          <hr className="mb-5" />
        </section>
        <Products>{this.showProduct(currentProducts)}</Products>
        <div className="d-flex justify-content-center wow fadeIn mb-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination pg-blue text-center">
              {renderPageNumbers}
            </ul>
          </nav>
        </div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FProductContainer);
