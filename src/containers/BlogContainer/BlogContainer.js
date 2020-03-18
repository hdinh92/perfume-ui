import React, { Component } from "react";
import * as Actions from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import GlobalLoading from "../../components/GlobalLoading/GlobalLoading"
class BlogContainer extends Component {
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
    const { news, classes } = this.props;
    var { currentPage, productsPerPage } = this.state;
    var indexOfLastProduct = currentPage * productsPerPage;
    var indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    var currentNews = news.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    var pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news.length / productsPerPage); i++) {
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
    if(!news.length){
      return <div><GlobalLoading/></div>;
    }
    var elmNews = currentNews.map(item => {
      return (
        <React.Fragment key={item.id}>
          <hr className="mb-5" />
          <div className="row mt-3 wow fadeIn">
            <div className="col-lg-5 col-xl-4 mb-4">
              <div className="view overlay rounded z-depth-1">
                <img src={item.image} className={`img-fluid ${classes.img}`} alt={item.name} />
                <Link to={`/blog/${item.id}`}>
                  <div className="mask rgba-white-slight" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
              <h3 className="mb-3 font-weight-bold dark-grey-text">
                <strong>{item.title}</strong>
              </h3>
              <p className="grey-text">
                Learn how to create a smart website which learns your user and
                reacts properly to his behavior.
              </p>
              <Link to={`/blog/${item.id}`} className="btn btn-warning btn-md">
                Đọc tiếp
                <i className="fa fa-caret-right ml-2" />
              </Link>
            </div>
          </div>
          
        </React.Fragment>
      );
    });
    return (
      <div className="container">
        {/*Section: Cards*/}
        <section className="pt-4">
          <div className="wow fadeIn">
            {/*Section heading*/}
            <h2 className="h1 text-center mb-5">
              NHỮNG ĐIỀU THÚ VỊ VỀ NƯỚC HOA <i className="fa fa-heart ml-2"></i>
            </h2>
            {/*Section description*/}
            <p className="text-center">
              Những mẹo nhỏ giúp bạn có thể lựa chọn được sở thích về mùi hương
              phù hợp với cá tính riêng của bạn{" "}
            </p>
            <p className="text-center mb-5 pb-5">
              Cùng Iperfume hiểu rõ hơn về nước hoa nhé
            </p>
          </div>
          {/* {!(news.length) ? <GlobalLoading/> : elmNews} */}
        {elmNews}
        <hr className="mb-5" />
        <div className="d-flex justify-content-center wow fadeIn mb-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination pg-blue text-center">
              {renderPageNumbers}
            </ul>
          </nav>
        </div>
        </section>
      </div>
    );
  }
  componentDidMount() {
    this.props.onShowNews();
  }
}
const mapStateToProps = state => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowNews: () => {
      dispatch(Actions.actFetchNewsRequest());
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(BlogContainer));
